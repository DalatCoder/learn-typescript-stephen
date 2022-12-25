/**
 * Base Component
 */
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
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
