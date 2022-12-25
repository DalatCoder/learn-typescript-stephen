import { Component } from "./base.js";
import { DragTarget } from "../contracts/drag-drop.js";
import { Project } from "../models/project.js";
import { ProjectState } from "../state/project.js";
import { ProjectStatus } from "../models/project.js";
import { ProjectItem } from "./project-item.js";
import { Autobind } from "../decorators/autobind.js";

/**
 * Project List Class | Render List
 */
export class ProjectList
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
