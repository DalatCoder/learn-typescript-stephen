# Typescript: The Complete Developer's Guide

[Link](https://www.udemy.com/course/typescript-the-complete-developers-guide)

## Course overview

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

## 1. Getting started with TS

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

## 2. What is a Type system?

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

## Type annotations & Type inference

- Type annotations: code we add to tell `ts` what type of
  value a variable will refer to

- Type inference: `ts` tries to figure out what type of
  value a variable refers to

Summary:

- Type annotations: we tell `ts` the type
- Type inference: `ts` guesses the type

### Variables

Type annotations:

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

### Functions

### Objects
