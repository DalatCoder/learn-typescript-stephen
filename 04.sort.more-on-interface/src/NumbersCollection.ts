import { Sortable, Sorter } from './Sorter';

export class NumbersCollection extends Sorter implements Sortable {
  constructor(public data: number[]) {
    super(this);
  }

  get length(): number {
    return this.data.length;
  }

  // Check if number on the left is greater than number on the right ==> Swap
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
