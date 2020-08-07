export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public comparable: Sortable) {}

  sort(): void {
    const { length } = this.comparable;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.comparable.compare(j, j + 1)) {
          this.comparable.swap(j, j + 1);
        }
      }
    }
  }
}
