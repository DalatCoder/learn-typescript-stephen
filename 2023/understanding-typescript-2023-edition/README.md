# Understanding Typescript - 2023 Edition

## Section 1. Getting started

### What is TS & Why should you use it?

- A JS Supperset
- A language building up on JS
- Adds new features + Advantages to JS
- TS can't be executed by JS environments
- Need compiler to compile ts to js

Why TS?

![Image](assets/whyts.png)

### TypeScript Advantages

Typescript adds

- Types
- Next-generation Javascript features (compiled down for older version)
- Non-JS features like `interfaces` or `generics`
- Meta-Programming features like `decorators`
- Rich configuration options
- Modern tooling that helps even in non-ts project

### Course outline

![Image](assets/outline.png)

### Boilerplat project

`boilerplate`

- `index.html`
- `app.ts`
- `package.json`

```json
{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "lite-server",
    "compile": "tsc *.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "lite-server": "^2.6.1",
    "typescript": "^4.9.4"
  }
}
```

## Section 2. TypeScript Basics & Basic Types

### Using types

Core types

- `number`: no special type for `integer` or `float`
- `string`: `'hi'`, `"hi"`, \`hi\`
- `boolean`: `true`, `false`, no `truthy` or `falsy` values
- `object`
- `Array`

Types added by `ts`

- `Tuple`: a `fixed-length` array (`[1, 2]`)
- `Enum`: automatically enumerated global constant identifies
- `any`: any kind of value, no specific type assignment

```ts
function add(n1: number, n2: number): number {
  return n1 + n2;
}

const number1: number = 5;
const number2: number = 2.8;

const result = add(number1, number2);
console.log(result);
```

### Typescript types vs Javascript types

Using `typeof` operator in `js`, checking the type at `runtime`

```js
function add(n1, n2) {
  if (typeof n1 !== "number") {
    throw new Error("");
  }

  if (typeof n2 !== "number") {
    throw new Error("");
  }
}
```

Using `ts` for type checking at `compile time`

> The key difference is: JS uses "dynamic types" (resolved at runtime).
> Typescript uses "static types" (set during development time)

The core primitive types in TS are all lowercase!

- `string` not `String`
- `number` not `Number`

### Type Assignment & Type Inference

- Type assignment: we write type manually
- Type inference: TS try to figure out the variable type

### Object Types

```ts
const person: {
  name: string;
  age: number;
} = {
  name: "hieu",
  age: 20,
};
```

### Arrays Types

```ts
const numbers: number[] = [1, 2, 3];
const strings: string[] = ["a", "b", "c"];

const things: any[] = [1, "a", true];
```

### Tuples

```ts
const adminRole: [number, string] = [1, "admin"];
const guestRole: [number, string] = [2, "guest"];

const csvColumns: [string, string] = ["first_name", "last_name"];
const csvValues: [string, string] = ["Hieu", "Nguyen Trong"];
```

### Enums

```ts
enum Role {
  ADMIN,
  GUEST,
}

const adminRole = Role.ADMIN; // 0
const guestRole = Role.GUEST; // 1

enum Permission = {
    READ = 'READ',
    EDIT = 'EDIT',
    VIEW = 'VIEW'
}

const permission = Permission.READ; // READ
```

### The `any` type

```ts
let nonExpectedType: any;

nonExpectedType = 1;
nonExpectedType = "a";
nonExpectedType = true;
```

Avoid `any` as much as possible

### `union` types

```ts
let nullableNumber: number | null = 1;
nullableNumber = null;
```

```ts
function combine(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    result = input1 + input2;
  }

  return result;
}
```

### Literal Types

```ts
function checkPermision(permission: "read" | "view" | "create") {}

checkPermision("read");
checkPermision("view");
checkPermision("create");

checkPermision("download"); // not allowed
```

### Type aliases / Custom types

It can be cumbersome to always repeat the union type like this: `number | string`

You might want to trade a new type which reinstalls this union type. We can do that by using another `ts` feature called `type aliases`

```ts
type NullableString = string | null;
type NullableNumber = number | null;
type PermissionDescriptor = "read" | "view" | "download";

function add(a: NullableNumber, b: NullableNumber) {}

let n1: NullableNumber;
n1 = 1;
n1 = null;
```

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

```ts
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!
```

### Function return types & `void`

It's a good idea to let `ts` infer the function return types.

```ts
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function concat(s1: string, s2: string): string {
  return s1 + s2;
}

const sum = add(1, 2); // number
const s3 = concat("a", "b"); // string
```

Using `void` when the function isn't return anything

```ts
function greeting(): void {
  console.log("Hello World");
}

const result = greeting();
console.log(result); // undefined
```

In `js` the function always return value, if we didn't return anything,
`undefined` is automatically return.

```ts
function greeting(): undefined {
  console.log("Hello World");

  return undefined;
}
```

`void` is the return type we should choose if the function is not
return anything (does not have the `return` keyword)

### Function as Types

```ts
const numbers = [1, 2, 3];

let doubleFn: (n: number) => number;
doubleFn = (n: number) => n * 2;

numbers.map(doubleFn);
```

### Function types & callbacks

```ts
function customMap(
  numbers: number[],
  cb: (value: number, index: number) => number
) {}

customMap([1, 2, 3], (value, index) => {});
```

### The `unknown` type

```ts
let userInput: unknown;

userInput = 1;
userInput = "a";
```

`unknown` is different to `any`

```ts
let userInput: unknown;
let userName: string;

userInput = 1;
userInput = "a";

userName = userInput; // error
```

`error`: type `unknown` is not assignable to type `string`

```ts
let userInput: any;
let userName: string;

userInput = 1;
userInput = "a";

userName = userInput; // this works
```

`any` is the most `flexible` type in `ts`, and it basically disables
all type checking. And `ts` just says, "I give up, do whatever you want"

`unknown` is a bit more restricted than `any`

```ts
let userInput: unknown;
let userName: string;

userInput = 1;
userInput = "a";

if (typeof userInput === "string") {
  userName = userInput; // we have to check first
}
```

`unknown` is better than `any` because it makes sure that you're not
allowed to everything but you have at least some `type checking`

### The `never` type

```ts
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

function infiniteLoop(): never {
  while (true) {}
}

generateError("Bad Request", 400);
```

The helper function above never return anything.

```ts
const result = generateError("Bad Request", 400);

console.log(result); // the app never reach here
```
