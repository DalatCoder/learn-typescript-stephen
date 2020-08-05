// Type annotation
let apples: number = 5;

apples = 10;
// apples = 'hello' | error
//

const speed: string = 'fast';
const hasName: boolean = true;

const nothingMuch: null = null;
const nothing: undefined = undefined;

// built in object
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {
  drive() {
    console.log('brbrbr');
  }
}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
};
