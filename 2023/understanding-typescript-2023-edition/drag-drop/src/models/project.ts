/**
 * Define Project Type
 */
export enum ProjectStatus {
  Active,
  Finished,
}

export class Project {
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
