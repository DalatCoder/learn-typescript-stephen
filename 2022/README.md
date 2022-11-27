# Typescript: The Complete Developer's Guide

[Link](https://www.udemy.com/course/typescript-the-complete-developers-guide)

- [Typescript: The Complete Developer's Guide](#typescript-the-complete-developers-guide)
  - [1. Course overview](#1-course-overview)
  - [2. Getting started with TS](#2-getting-started-with-ts)
  - [3. What is a Type system?](#3-what-is-a-type-system)
  - [4. Type annotations \& Type inference](#4-type-annotations--type-inference)
    - [4.1. Type annotations](#41-type-annotations)
    - [4.2. Type inference](#42-type-inference)
    - [4.3. When to use](#43-when-to-use)
      - [4.3.1. function return `any` type](#431-function-return-any-type)
      - [4.3.2. delayed initialization](#432-delayed-initialization)
      - [4.3.3. when inference doesn't work](#433-when-inference-doesnt-work)
  - [5. Annotations with Functions and Objects](#5-annotations-with-functions-and-objects)
    - [5.1. Annotations with function expression](#51-annotations-with-function-expression)
    - [5.2. Annotations with function declaration](#52-annotations-with-function-declaration)
    - [5.3. `void` and `never`](#53-void-and-never)
    - [5.4. Destructuring with annotations](#54-destructuring-with-annotations)
    - [5.5. Annotations around objects](#55-annotations-around-objects)
    - [5.6. Mastering Typed Arrays](#56-mastering-typed-arrays)
    - [5.7. Tuples in `ts`](#57-tuples-in-ts)
    - [The all-important interface](#the-all-important-interface)
      - [overview](#overview)
      - [reusable code](#reusable-code)
      - [general plan with interfaces](#general-plan-with-interfaces)

## 1. Course overview

2 things to concern when learning `ts`

- `syntax` + `features`
- `design patterns with ts`: how do we use `interface` to write reusable code?

Course goal

- Understanding basic types in `ts`
- Function typing + annotations
- Type definition files
- Arrays in TS
- Modules systems
- Classes + Refresher on OOP
- Projects (`focus on design patterns`)

## 2. Getting started with TS

Build an app to make a network request to fetch
some JSON and print the result.

```js
import axios from "axios";

const url = "https://jsonplaceholder.typeicode.com/todos/1";

axios.get(url).then((response) => {
  console.log(response.data);
});
```

To run the code:

- Compile `ts` to `js` with `tsc index.ts`
- Run `node index.js`

To run quickly:

- Run `ts-node index.ts`

Problem when we manually map the result. We don't know the
errors until we `execute` the program (`runtime` errors)

```js
import axios from "axios";

const url = "https://jsonplaceholder.typeicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data;

  // wrong properties
  const id = todo.ID;
  const title = todo.Title;
  const finished = todo.Finished;

  console.log({ id, title, finished });
});
```

Define some `interface` with `ts`, `ts` uses `interface` to
describe the structure of an object.

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

Cast type with `ts`

```js
import axios from "axios";

const url = "https://jsonplaceholder.typeicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.ID; // error
  const title = todo.Title; // error
  const finished = todo.Finished; // error

  console.log({ id, title, finished });
});
```

Extract function and add some type annotations

```ts
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
```

## 3. What is a Type system?

Flow

- Plain defintion + overview
- Why do we care?
- Examples
- When to use this?

> Type is the easy way to refer to the different properties
> and functions that a value has

Types in `js`

- Primitive types:

  - number
  - boolean
  - void
  - undefined
  - string
  - symbol
  - null

- Object types:
  - functions
  - array
  - classes
  - objects

Why do we care about types?

- Types are used by the `ts compiler` to analyze our code for errors
- Types allow other engineers to understand what values are flowing aroud our codebase

Where do we use types?

- Everywhere

## 4. Type annotations & Type inference

- Type annotations: code we add to tell `ts` what type of
  value a variable will refer to

- Type inference: `ts` tries to figure out what type of
  value a variable refers to

Summary:

- Type annotations: we tell `ts` the type
- Type inference: `ts` guesses the type

### 4.1. Type annotations

Type annotations with simple primitive types

```ts
const apples: number = 5;
const speed: string = "fast";
const hasName: boolean = true;

// special: the value has the name equals to its type
const nothingMuch: null = null;
const nothing: undefined = undefined;
```

Type annotations with some built-in objects

```ts
const now: Date = new Date();
```

Type annotations with `array`

```ts
const colors: string[] = ["red", "green", "blue"];
const numbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, false, true];
```

Type annotations with `classes`

```ts
class Car {}

const car1: Car = new Car();
const car2: Car = new Car();
```

Type annotations with `object literal`

```ts
// point is an object literal
const point = {
  x: 10,
  y: 20,
};

const point1: { x: number; y: number } = {
  x: 10,
  y: 20,
};
```

Type annotations with `functions`

```ts
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// logNumber accept 1 argument with type of number and return nothing (void)
```

### 4.2. Type inference

> if delaration and initialization are on the same line,
> TS will figure out the type of 'color' for us

```ts
const color = "red";

// variable declaration: const color
// variable initialization: 'red'
```

If we `declare` a variable and then `assign` it a value
on another line, `type inference` won't work anymore.

```ts
let colors;
colors = "red";
```

### 4.3. When to use

- Type inference: always
- Type annotations:
  - When we declare a variable on one line then initialize it later
  - When we want a variable to have a type that can't be inferred
  - When a function returns the `any` type and we need to clearify the value

#### 4.3.1. function return `any` type

```ts
const json = '{ "x": 10, "y": 20 }';
const coordinates = JSON.parse(json);

// `any` type
console.log(coordinates);
```

> the `any` type is essentially means that `ts`
> has no idea what type of value is being used

`any`

- a type, just as `string` or `boolean` are
- means `ts` has no idea what this is
- can't check for correct property references
- avoid variables with `any` at all costs

Fixing the `any` type with type annotation

```ts
const json = '{ "x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);
```

#### 4.3.2. delayed initialization

```ts
const numbers = [1, 2, 3, 4, 5];
const evens: number[];

for (const n of numbers) {
  if (n % 2 === 0) {
    evens.push(n);
  }
}
```

#### 4.3.3. when inference doesn't work

Occur when a variable can have multiple values of some types.
Conside a `bad code` example below

```ts
const numbers = [-10, -1, 12];
// let numberAboveZero = false;
let numberAboveZero: boolean | number = false;

for (const n of numbers) {
  if (n > 0) {
    numberAboveZero = n;
  }
}
```

## 5. Annotations with Functions and Objects

**Type annotations** for functions: Code we add to tell `ts` what
type of arguments a function will receive and what type
of values it will return

**Type inference** for functions: `ts` tries to figure out what type of value a function will return

### 5.1. Annotations with function expression

```ts
// normal js function, a & b belong to `any` type
const add = (a, b) => {
  return a + b;
};

// add annnotation for the arguments
const add = (a: number, b: number) => {
  return a + b;
};

// add annotation for the returned value
const add = (a: number, b: number): number => {
  return a + b;
};
```

### 5.2. Annotations with function declaration

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### 5.3. `void` and `never`

- `void`: a function that returns nothing
  - can return `null`
  - can return `undefined`

```ts
const logger = (message: string): void => {
  console.log(message);
};
```

- `never`: used when a function `throw` an `error`

```ts
// never reach the end of function
const throwError = (message: string): never => {
  throw new Error(message);
};

// throw error based on condition
const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

// throw error based on condition
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }

  console.log(message);
};
```

### 5.4. Destructuring with annotations

```ts
const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {};
```

Using `es6` destructing

```ts
const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {};
```

### 5.5. Annotations around objects

```ts
const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```

### 5.6. Mastering Typed Arrays

**Typed arrays**: arrays where each element is some consistent type
of value

```ts
// type inference
const carMakers = ["ford", "toyota", "chevy"];

// type annotation
const carMakers: string[] = ["ford", "toyota", "chevy"];
```

Why do we care?

- `ts` can do type inference when extracting values from an array
- `ts` can prvent us from adding incompatible values to the array
- we can get help with `map`, `forEach`, `reduce` functions
- flexible - arrays can still contain multiple different types

Multiple types in `array`

```ts
const carMakers: (string | number)[] = ["1", 1];
```

### 5.7. Tuples in `ts`

**Tuple**: array-like structure where each element represents
somme property of a record.

```ts
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// use normal array to represent object properties
// type: (string | boolean | number)[]
// user can push string | boolean | number into this array
const pepsi = ["brown", true, 40];

// using tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];
```

We can define a `type` (type alias) for representing a `tuple`

```ts
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];
```

Why tuples?

- `csv` file, representing each record in a `tuple`

### The all-important interface

#### overview

> `interfaces` + `classes` = how we get really strong code reuse in `ts`

Interfaces: creates a new type, describing the property names and
value types of an object.

```ts
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle);
};

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

// oldCivic statisfies Vehicle interface
printVehicle(oldCivic);

const o = {
  name: "hieu",
};

// o doesn't statisty Vehicle interface
printVehicle(oldCivic);
```

Syntax around `interface`

```ts
interface Vehicle {
  name: string;
  year: Date; // using any types in `interface`
  broken: boolean;

  // add a function signature
  // summary function accepts no args and return string
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `name: ${this.name}`;
  },
};
```

Consider the above example, we have `printVehicle` function that
accept 1 args of interface `Vehicle`, but inside the function,
we only use the method `summary`. So, is it neccessary for us
to include `name, year, broken` inside the `Vehicle` interface?

We can omit all of the `properties` inside the `Vehicle` interface
and the entire program works at usual. Then, the `Vehicle` isn't
a proper name for the `interface`, so we rename it to `Rerportable`.
Means that something can be `report` if that thing has a method
called `summary`

```ts
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `name: ${this.name}`;
  },
};

const printReport = (reportable: Reportable): void => {
  console.log(reportable.summary());
};
```

#### reusable code

The `printReport` function now can work with any `things` that
have `summary` method on it (reusable code).

#### general plan with interfaces

> `interface` is a gatekeeper to a `function`

General strategy for reusable code in `ts`

- create functions that accept arguments that are typed with
  `interfaces`

- Objects/classes can decide to `implement` a given `interface`
  to work with a `function`
