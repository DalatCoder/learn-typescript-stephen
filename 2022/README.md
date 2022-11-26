# Typescript: The Complete Developer's Guide

[Link](https://www.udemy.com/course/typescript-the-complete-developers-guide)

## Getting started with TS

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
