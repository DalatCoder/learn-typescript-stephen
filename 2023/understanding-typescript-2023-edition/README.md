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

## Section 3: The `ts` compiler (and its configs)

### Using `watch` mode

- `tsc *.ts --watch`
- `tsc *.ts -w`

### Compiling the entire project / multiple files

- `tsc --init` to initialize the `ts` project
- we get the `tsconfig.json`
- now we only need to run `tsc`

### Including & Excluding files

```json
{
  "exclude": ["secret.ts", "*.dev.ts", "**/*.dev.ts", "node_modules"]
}
```

- `secret.ts`: ignore `secret.ts` file
- `node_modules`: ignore `node_modules` folder
- `*.dev.ts`: ignore any file ending with `.dev.ts`
- `**/*.dev.ts`: ignore any file ending with `.dev.ts` in any folder

```json
{
  //   "include": ["app.ts"]
}
```

### Setting a compilation target

We will look at `compilerOptions`, this will control how `ts` code
is compiled.

- `target`: which `js` version we want to compile the code, the default
  value is `es5`

### Understanding `ts` core `libs`

`lib` is an option that allows you to specify which default
objects and features `ts` knows.

```ts
document.querySelector(); // how does `ts` know document exists?
```

How does `ts` know document exists?

If we don't set the value for `lib`, the default value are set based on
our `target` option.

If `target` is `es6`, then the `lib` contains all the features that `es6`
give us, such as:

- `Map()`
- All DOM API
- ...

[tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

### Working with source maps

Sourcemap helps us with debugging and development. If we set `sourceMap = true`. The `map` file basically act as a bridge which is understood by
modern browsers and the developer tools to connect the `js` files
to the input files (`ts` file).

These files help simplied the debugging process.

### `rootDir` and `outDir`

Often, in project, we will have the `dist` folder, it has the job of
holding all the output (all the `js` files).

The `src` folder will hold all the input files (all the `ts` files).

```json
{
  "outDir": "./dist",
  "rootDir": "./src"
}
```

### Stop emitting files on compilation errors

```json
{
  "noEmitOnError": false
}
```

Don't output `js` file if the corresponding `ts` file contains some
errors

### Strict compilation

### Code quality options

### Debugging with VSCode

Extensions:

- ESLint
- Prettier
- Debugger for Chrome

Configs:

- Enable source map options: `sourceMap = true`

Process:

- Set breakpoint
- Start debug mode
- Set `url` equal to the local server: `http://localhost:3000`

## Section 4: Next-generation JS & TS

[Next JS & TS Feature & Supports](https://kangax.github.io/compat-table/es6/)

### `let` and `const`

Scope in which this variable is available.

- `var`: global & function scope
- `let`: global & function & block scope
- `const`: global & function & block scope

### Arrow function

### Default function parameters

### The spread operator `...`

### Rest Parameters

### Array & Object destructuring

```ts
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...remainNumbers] = numbers;
```

### How code gets compiled

`ts` helps us compile modern `js` to old `js` if we tell `ts` to do so.

## Section 5: Classes & Interfaces

### What are `classes`?

![Image](assets/oop.png)

![Image](assets/class.png)

```ts
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department("Accounting");

console.log(accounting);
```

### `constructor` functioins & the `this` keyword

```ts
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

console.log(accounting);
```

Using `this` to refer to the current `instance`.

However, the `this` keyword can be tricky.

```ts
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe(); // Department Accounting

const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // Department undefined
```

> `this` typically refers to the thing which is responsible for calling
> a method

`ts` helps us to bind the `this` context by using `this` in function params list.

```ts
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // this in the method always bind to Department class
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe(); // Department Accounting

const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // error

const accountingCopy1 = { name: "DUMMY", describe: accounting.describe };
accountingCopy1.describe(); // Department DUMMY
```

### `private` and `public` access modifiers

```ts
class Department {
  private name: string;

  constructor(n: string) {
    this.name = n;
  }

  // this in the method always bind to Department class
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");
accounting.name = "IT"; // error
```

`public` is the default access mofidifier.

### Shorthand initialization

```ts
class Department {
    constructor(
        private firstName: string,
        private lastName string,
        private age: number
    ) {}
}
```

### `readonly` properties

Field value can be assigned once inside the constructor.

### Inheritance

```ts
class Department {}

class ITDepartment extends Department {
  constructor() {
    // call the parent constructor, must be called first
    super();

    // another constructor init
    // ...
  }
}

class AccountingDepartment extends Department {}
```

Class can only inherit from 1 parent class.

### Overriding properties & the `protected` modifier

### Getters & Setters

```ts
class Department {}

class ITDepartment extends Department {
  private report: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Invalid value");
    }

    this.report = value;
  }

  constructor() {
    // call the parent constructor, must be called first
    super();

    // another constructor init
    // ...
  }
}

const it = new ITDepartment();

it.mostRecentReport;

it.mostRecentReport = "New Report";
it.mostRecentReport;
```

A getter is basically a property, where you execute a function
or a method when you retrieve a value and that allows developer
to add more complex logic.

### Static methods & Properties

Static props and methods allow you to add props and methods to `classes`
which are not accessed on an `instance` of the `class`.

> This is often useful for utility functions that you want to group or
> map to a class logically or global constants which you also wanna
> store in a class.

```ts
Math.pow();
Math.PI;
```

`Math` acts more like a `namespace` as a `grouping` mechanism here. And
that's a common use case for static methods and properties.

```ts
class Utils {
  static fiscalYear = 2022;

  static toUpper(str: string) {
    return str.toUpperCase();
  }
}

Utils.toUpper("ts"); // TS
Utils.fiscalYear;
```

### Abstract classes

Add some methods to the `abstract class` as have all child classes
implement those methods

`Abstract` can therefore be very useful if you wanna enforce that
all classes based on some other class, share some common method
or property. The base class don't have to provide the concrete value,
the concrete implementation. The inheriting classes have to do that.

The `abstract` class can't be instatiated themselves

### Singletons & Private constructors

The singleton pattern is about ensuring that you always only have
exactly one instance of a certain class.

```ts
class DbContext {
  private static instance: DbContext;

  private constructor() {}

  static getInstance() {
    if (DbContext.instance) {
      return DbContext.instance;
    }

    DbContext.instance = new DbContext();
    return DbContext.instance;
  }
}
```

### `interface`

An `interface` describes the structure of an object. We can use it to
describe how an object should look like.

```ts
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}
```

Use `interface` as a `type`

```ts
let user1: Person;

user1 = {
  name: "max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
```

> We can use `interface` as a `type` to type check for objects that must
> have this structure

### Using `interface` with `class`

`interface` can be used as a `contract` a class can implement and a class
then has to adhere to.

```ts
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  greet(phrase: string) {
    console.log("hello");
  }
}
```

`interface` is often used to share functionality amongst different
classes not regarding their concrete implementation.

### Why `interface`?

Well, it is useful in situations like this,
where we know we want to have
a certain set of functionalities.

Let's say a `greet` method, and we want to ensure
that a class has such a `greet` method,
and another class has it maybe as well,
well, then, we can implement an interface
which forces the existence of this method.
Then we can easily share functionality amongst classes,
and every class has to add its own implementation,
the exact code that should execute
when the method is called,
but we enforce a certain structure

That allows us to write truly powerful and flexible code.
Where we don't have to know everything about an object,
or everything about a class. But we know that class implement
that interface and it has all of the needed methods to us to use.

### Readonly interface properties

```ts
interface Greetable {
  readonly name: string;
}
```

### Extending interface

```ts
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}
```

### Interface as function type

Interfaces can also be used to define the structure of a
function. So basically as a replacement for the function type.

```ts
type AddFn = (a: number, b: number) => number;

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
```

### Optional Parameters & Properties

```ts
interface Named {
  readonly name: string;
  outputName?: string; // optional

  greet(phrase?: string) {

  }

  greet1(phrase: string = '') {

  }
}
```
