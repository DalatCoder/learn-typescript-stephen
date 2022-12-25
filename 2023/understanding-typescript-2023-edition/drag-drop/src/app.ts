/**
 * Drag & Drop Interfaces
 */
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

/**
 * Define Project Type
 */
enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  get persons() {
    if (this.people === 1) {
      return "1 person";
    } else {
      return `${this.people} persons`;
    }
  }

  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

/**
 * Define Listener Type
 */
type Listener<T> = (items: T[]) => void;

/**
 * Project State Management
 */
class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listernFn: Listener<T>) {
    this.listeners.push(listernFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );

    this.projects.push(newProject);

    /**
     * Notify all listeners
     */
    this.notifyListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((p) => p.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.notifyListeners();
    }
  }

  private notifyListeners() {
    for (const listernFn of this.listeners) {
      listernFn(this.projects.slice());
    }
  }
}

/**
 * Input Validation
 */
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }

  if (typeof validatableInput.value === "string") {
    /**
     * Only false if minLengh = null | undefined (0 is OK)
     */
    if (validatableInput.minLength != null) {
      isValid =
        isValid && validatableInput.value.length >= validatableInput.minLength;
    }

    if (validatableInput.maxLength != null) {
      isValid =
        isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
  }

  if (typeof validatableInput.value === "number") {
    if (validatableInput.min != null) {
      isValid = isValid && validatableInput.value >= validatableInput.min;
    }

    if (validatableInput.max != null) {
      isValid = isValid && validatableInput.value <= validatableInput.max;
    }
  }

  return isValid;
}

/**
 * AutoBind decorator
 */
function Autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalFunction = descriptor.value;
  const autobindDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFunction = originalFunction.bind(this);
      return boundFunction;
    },
  };

  return autobindDescriptor;
}

/**
 * Base Component
 */
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;

    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as U;
    this.element.id += newElementId ?? "";

    /**
     * Insert template content into the DOM at hostElement position
     */
    this.attach(insertAtStart);

    /**
     * Setup some initial configuration
     */
    // this.configure();

    /**
     * Render UI
     */
    // this.render();
  }

  private attach(insertAtBeginning: boolean) {
    if (insertAtBeginning) {
      this.hostElement.insertAdjacentElement("afterbegin", this.element);
    } else {
      this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
  }

  abstract configure(): void;
  abstract render(): void;
}

class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    this.project = project;

    this.configure();
    this.render();
  }
  configure(): void {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  render(): void {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent =
      this.project.persons + " assigned";
    this.element.querySelector("p")!.textContent = this.project.description;
  }

  @Autobind
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  @Autobind
  dragEndHandler(_event: DragEvent): void {
    console.log("drag end");
  }
}

/**
 * Project List Class | Render List
 */
class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  projects: Project[];

  constructor(public type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.projects = [];

    /**
     * It's safer to let the child component called configure and render methods
     * Because the child component need to setup some initial state first
     */
    this.configure();
    this.render();
  }

  configure(): void {
    /**
     * Subcribes to state changes
     */
    ProjectState.getInstance().addListener((projects: Project[]) => {
      this.projects = projects.filter((project) => {
        if (this.type === "active") {
          return project.status === ProjectStatus.Active;
        }

        return project.status === ProjectStatus.Finished;
      });
      this.renderProjects();
    });

    /**
     * Handle drop events
     */
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);
  }

  render() {
    const listId = `${this.type}-projects-list`;

    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private renderProjects() {
    const listElementId = `${this.type}-projects-list`;

    const listEl = document.getElementById(listElementId)! as HTMLUListElement;
    listEl.innerHTML = "";

    for (const project of this.projects) {
      new ProjectItem(listElementId, project);
    }
  }

  @Autobind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      /**
       * Allow drop
       */
      event.preventDefault();

      const listEl = this.element.querySelector("ul")! as HTMLUListElement;
      listEl.classList.add("droppable");
    }
  }

  @Autobind
  dragLeaveHandler(_event: DragEvent): void {
    const listEl = this.element.querySelector("ul")! as HTMLUListElement;
    listEl.classList.remove("droppable");
  }

  @Autobind
  dropHandler(event: DragEvent): void {
    const projectId = event.dataTransfer!.getData("text/plain");

    if (this.type === "active") {
      ProjectState.getInstance().moveProject(projectId, ProjectStatus.Active);
    } else {
      ProjectState.getInstance().moveProject(projectId, ProjectStatus.Finished);
    }
  }
}

/**
 * Project Input Class | Handle Form
 */
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");

    this.titleInputElement = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;

    this.configure();
    this.render();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  render(): void {}

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid input, please try again!");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  /**
   * Handle form submission
   * @param event Event
   */
  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    /**
     * Only if userInput is a tuple
     */
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      ProjectState.getInstance().addProject(title, description, people);

      this.clearInputs();
    }
  }
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
