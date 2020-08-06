// Type annotation
let apples: number = 5;

apples = 10;
// apples = 'hello' | error

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
  y: 20,
};

// Function
const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
};

// Always use type inference
// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

// 2) When we declare a variable to one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
// Better approach: let foundWord = false

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctyly
// Type of numberAboveZero should be boolean or number: VERY BAD CODE EXAMPLE
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
