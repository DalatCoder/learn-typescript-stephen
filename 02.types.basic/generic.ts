class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// In a nutshell
// Means T just a argument which added to customize how class behave
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfNumbers = new ArrayOfAnything<number>([1, 2, 3]);
/*
 Type inference with generic
  const arrayOfNumbers = new ArrayOfAnything([1, 2, 3]);
*/
const arrayOfStrings = new ArrayOfAnything<string>(['red', 'green', 'blue']);

// Example of generics with functions
function printStrings(arr: string[]): void {
  for (const el of arr) {
    console.log(el);
  }
}

function printNumbers(arr: number[]): void {
  for (const el of arr) {
    console.log(el);
  }
}

function printAnything<T>(arr: T[]): void {
  for (const el of arr) {
    console.log(el);
  }
}

printAnything<string>(arrayOfStrings.collection); // Recommend for TS to auto check error
printAnything(arrayOfNumbers.collection); // Type inference

// Generic Constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

// Every T pass to printHousesOrCars will satisfy Printable interface
// Generic constraint: limit the type that we can pass to generics function
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);
// printHousesOrCars([1, 2, 3]); // Error
