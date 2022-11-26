# Typescript: The Complete Developer's Guide

[Link](https://www.udemy.com/course/typescript-the-complete-developers-guide)

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
