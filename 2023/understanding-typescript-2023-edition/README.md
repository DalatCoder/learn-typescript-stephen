# Understanding Typescript - 2023 Edition

- [Understanding Typescript - 2023 Edition](#understanding-typescript---2023-edition)
  - [1. Section 1. Getting started](#1-section-1-getting-started)
    - [1.1. What is TS \& Why should you use it?](#11-what-is-ts--why-should-you-use-it)
    - [1.2. TypeScript Advantages](#12-typescript-advantages)
    - [1.3. Course outline](#13-course-outline)
    - [1.4. Boilerplat project](#14-boilerplat-project)
  - [2. Section 2. TypeScript Basics \& Basic Types](#2-section-2-typescript-basics--basic-types)
    - [2.1. Using types](#21-using-types)
    - [2.2. Typescript types vs Javascript types](#22-typescript-types-vs-javascript-types)
    - [2.3. Type Assignment \& Type Inference](#23-type-assignment--type-inference)
    - [2.4. Object Types](#24-object-types)
    - [2.5. Arrays Types](#25-arrays-types)
    - [2.6. Tuples](#26-tuples)
    - [2.7. Enums](#27-enums)
    - [2.8. The `any` type](#28-the-any-type)
    - [2.9. `union` types](#29-union-types)
    - [2.10. Literal Types](#210-literal-types)
    - [2.11. Type aliases / Custom types](#211-type-aliases--custom-types)
    - [2.12. Function return types \& `void`](#212-function-return-types--void)
    - [2.13. Function as Types](#213-function-as-types)
    - [2.14. Function types \& callbacks](#214-function-types--callbacks)
    - [2.15. The `unknown` type](#215-the-unknown-type)
    - [2.16. The `never` type](#216-the-never-type)
  - [3. Section 3: The `ts` compiler (and its configs)](#3-section-3-the-ts-compiler-and-its-configs)
    - [3.1. Using `watch` mode](#31-using-watch-mode)
    - [3.2. Compiling the entire project / multiple files](#32-compiling-the-entire-project--multiple-files)
    - [3.3. Including \& Excluding files](#33-including--excluding-files)
    - [3.4. Setting a compilation target](#34-setting-a-compilation-target)
    - [3.5. Understanding `ts` core `libs`](#35-understanding-ts-core-libs)
    - [3.6. Working with source maps](#36-working-with-source-maps)
    - [3.7. `rootDir` and `outDir`](#37-rootdir-and-outdir)
    - [3.8. Stop emitting files on compilation errors](#38-stop-emitting-files-on-compilation-errors)
    - [3.9. Strict compilation](#39-strict-compilation)
    - [3.10. Code quality options](#310-code-quality-options)
    - [3.11. Debugging with VSCode](#311-debugging-with-vscode)
  - [4. Section 4: Next-generation JS \& TS](#4-section-4-next-generation-js--ts)
    - [4.1. `let` and `const`](#41-let-and-const)
    - [4.2. Arrow function](#42-arrow-function)
    - [4.3. Default function parameters](#43-default-function-parameters)
    - [4.4. The spread operator `...`](#44-the-spread-operator-)
    - [4.5. Rest Parameters](#45-rest-parameters)
    - [4.6. Array \& Object destructuring](#46-array--object-destructuring)
    - [4.7. How code gets compiled](#47-how-code-gets-compiled)
  - [5. Section 5: Classes \& Interfaces](#5-section-5-classes--interfaces)
    - [5.1. What are `classes`?](#51-what-are-classes)
    - [5.2. `constructor` functioins \& the `this` keyword](#52-constructor-functioins--the-this-keyword)
    - [5.3. `private` and `public` access modifiers](#53-private-and-public-access-modifiers)
    - [5.4. Shorthand initialization](#54-shorthand-initialization)
    - [5.5. `readonly` properties](#55-readonly-properties)
    - [5.6. Inheritance](#56-inheritance)
    - [5.7. Overriding properties \& the `protected` modifier](#57-overriding-properties--the-protected-modifier)
    - [5.8. Getters \& Setters](#58-getters--setters)
    - [5.9. Static methods \& Properties](#59-static-methods--properties)
    - [5.10. Abstract classes](#510-abstract-classes)
    - [5.11. Singletons \& Private constructors](#511-singletons--private-constructors)
    - [5.12. `interface`](#512-interface)
    - [5.13. Using `interface` with `class`](#513-using-interface-with-class)
    - [5.14. Why `interface`?](#514-why-interface)
    - [5.15. Readonly interface properties](#515-readonly-interface-properties)
    - [5.16. Extending interface](#516-extending-interface)
    - [5.17. Interface as function type](#517-interface-as-function-type)
    - [5.18. Optional Parameters \& Properties](#518-optional-parameters--properties)
  - [Section 6: Advanced Types](#section-6-advanced-types)
    - [Intersection Types](#intersection-types)
    - [Type Guards](#type-guards)
    - [Discriminated Unions](#discriminated-unions)
    - [Type Casting](#type-casting)
    - [Index properties](#index-properties)
    - [Function overloads](#function-overloads)
    - [Optinal Chaining](#optinal-chaining)
    - [Nullish Coalescing](#nullish-coalescing)
  - [Section 7: Generics](#section-7-generics)
    - [What are `generics`?](#what-are-generics)
    - [Creating a `generic` function](#creating-a-generic-function)
    - [Working with `constraints`](#working-with-constraints)
    - [The `keyof` constraint](#the-keyof-constraint)
    - [Generic classes](#generic-classes)
    - [Generic utility types](#generic-utility-types)
    - [Generic types vs Union types](#generic-types-vs-union-types)
    - [Sumarry](#sumarry)

## 1. Section 1. Getting started

### 1.1. What is TS & Why should you use it?

- A JS Supperset
- A language building up on JS
- Adds new features + Advantages to JS
- TS can't be executed by JS environments
- Need compiler to compile ts to js

Why TS?

![Image](assets/whyts.png)

### 1.2. TypeScript Advantages

Typescript adds

- Types
- Next-generation Javascript features (compiled down for older version)
- Non-JS features like `interfaces` or `generics`
- Meta-Programming features like `decorators`
- Rich configuration options
- Modern tooling that helps even in non-ts project

### 1.3. Course outline

![Image](assets/outline.png)

### 1.4. Boilerplat project

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

## 2. Section 2. TypeScript Basics & Basic Types

### 2.1. Using types

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

### 2.2. Typescript types vs Javascript types

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

### 2.3. Type Assignment & Type Inference

- Type assignment: we write type manually
- Type inference: TS try to figure out the variable type

### 2.4. Object Types

```ts
const person: {
  name: string;
  age: number;
} = {
  name: "hieu",
  age: 20,
};
```

### 2.5. Arrays Types

```ts
const numbers: number[] = [1, 2, 3];
const strings: string[] = ["a", "b", "c"];

const things: any[] = [1, "a", true];
```

### 2.6. Tuples

```ts
const adminRole: [number, string] = [1, "admin"];
const guestRole: [number, string] = [2, "guest"];

const csvColumns: [string, string] = ["first_name", "last_name"];
const csvValues: [string, string] = ["Hieu", "Nguyen Trong"];
```

### 2.7. Enums

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

### 2.8. The `any` type

```ts
let nonExpectedType: any;

nonExpectedType = 1;
nonExpectedType = "a";
nonExpectedType = true;
```

Avoid `any` as much as possible

### 2.9. `union` types

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

### 2.10. Literal Types

```ts
function checkPermision(permission: "read" | "view" | "create") {}

checkPermision("read");
checkPermision("view");
checkPermision("create");

checkPermision("download"); // not allowed
```

### 2.11. Type aliases / Custom types

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

### 2.12. Function return types & `void`

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

### 2.13. Function as Types

```ts
const numbers = [1, 2, 3];

let doubleFn: (n: number) => number;
doubleFn = (n: number) => n * 2;

numbers.map(doubleFn);
```

### 2.14. Function types & callbacks

```ts
function customMap(
  numbers: number[],
  cb: (value: number, index: number) => number
) {}

customMap([1, 2, 3], (value, index) => {});
```

### 2.15. The `unknown` type

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

### 2.16. The `never` type

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

## 3. Section 3: The `ts` compiler (and its configs)

### 3.1. Using `watch` mode

- `tsc *.ts --watch`
- `tsc *.ts -w`

### 3.2. Compiling the entire project / multiple files

- `tsc --init` to initialize the `ts` project
- we get the `tsconfig.json`
- now we only need to run `tsc`

### 3.3. Including & Excluding files

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

### 3.4. Setting a compilation target

We will look at `compilerOptions`, this will control how `ts` code
is compiled.

- `target`: which `js` version we want to compile the code, the default
  value is `es5`

### 3.5. Understanding `ts` core `libs`

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

### 3.6. Working with source maps

Sourcemap helps us with debugging and development. If we set `sourceMap = true`. The `map` file basically act as a bridge which is understood by
modern browsers and the developer tools to connect the `js` files
to the input files (`ts` file).

These files help simplied the debugging process.

### 3.7. `rootDir` and `outDir`

Often, in project, we will have the `dist` folder, it has the job of
holding all the output (all the `js` files).

The `src` folder will hold all the input files (all the `ts` files).

```json
{
  "outDir": "./dist",
  "rootDir": "./src"
}
```

### 3.8. Stop emitting files on compilation errors

```json
{
  "noEmitOnError": false
}
```

Don't output `js` file if the corresponding `ts` file contains some
errors

### 3.9. Strict compilation

### 3.10. Code quality options

### 3.11. Debugging with VSCode

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

## 4. Section 4: Next-generation JS & TS

[Next JS & TS Feature & Supports](https://kangax.github.io/compat-table/es6/)

### 4.1. `let` and `const`

Scope in which this variable is available.

- `var`: global & function scope
- `let`: global & function & block scope
- `const`: global & function & block scope

### 4.2. Arrow function

### 4.3. Default function parameters

### 4.4. The spread operator `...`

### 4.5. Rest Parameters

### 4.6. Array & Object destructuring

```ts
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...remainNumbers] = numbers;
```

### 4.7. How code gets compiled

`ts` helps us compile modern `js` to old `js` if we tell `ts` to do so.

## 5. Section 5: Classes & Interfaces

### 5.1. What are `classes`?

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

### 5.2. `constructor` functioins & the `this` keyword

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

### 5.3. `private` and `public` access modifiers

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

### 5.4. Shorthand initialization

```ts
class Department {
    constructor(
        private firstName: string,
        private lastName string,
        private age: number
    ) {}
}
```

### 5.5. `readonly` properties

Field value can be assigned once inside the constructor.

### 5.6. Inheritance

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

### 5.7. Overriding properties & the `protected` modifier

### 5.8. Getters & Setters

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

### 5.9. Static methods & Properties

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

### 5.10. Abstract classes

Add some methods to the `abstract class` as have all child classes
implement those methods

`Abstract` can therefore be very useful if you wanna enforce that
all classes based on some other class, share some common method
or property. The base class don't have to provide the concrete value,
the concrete implementation. The inheriting classes have to do that.

The `abstract` class can't be instatiated themselves

### 5.11. Singletons & Private constructors

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

### 5.12. `interface`

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

### 5.13. Using `interface` with `class`

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

### 5.14. Why `interface`?

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

### 5.15. Readonly interface properties

```ts
interface Greetable {
  readonly name: string;
}
```

### 5.16. Extending interface

```ts
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}
```

### 5.17. Interface as function type

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

### 5.18. Optional Parameters & Properties

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

## Section 6: Advanced Types

### Intersection Types

Intersection types allow us to combine other types

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// equals to
type ElevatedEmployee = {
  name: string;
  privileges: string[];
  startDate: Date;
};
```

### Type Guards

Type guards help us with `union` type (`number | string`). We can
use type guard to get exact type that we use at runtime.

Some type guards:

- `typeof` operator
- `in` operator to check for property inside of an object
- `instanceof`

Type guards is just a term that describes the idea or approach of
checking if a certain property or method exists before you try to
use it

```ts
function add(n1: string | number, n2: string | number) {
  // type guards using typeof operator
  if (typeof n1 === "number" && typeof n2 === "number") {
  }
}

function test(a: Admin | Employee) {
  if ("privileges" in a) {
    // type Admin
  }
}
```

### Discriminated Unions

It's a pattern which you can use when working with union types
that makes implementing type guards easier.

```ts
interface Bird {
  type: "bird"; // literal type
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // literal type
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird": {
    }

    case "horse": {
    }
  }
}
```

### Type Casting

Type casting helps you tell `ts` that some value is of a specific type.

2 ways of type casting:

- prefix with `<[Type]>`
- using `as`

```ts
const p = document.querySelector("p");
const p1 = <HtmlParagraphElement>document.getElementById("id");
const input = document.getElementById("input") as HtmlInputElement;
```

### Index properties

```ts
interface ErrorContainer {
  [prop: string]: string;
}
```

### Function overloads

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}
```

### Optinal Chaining

Using `?.` operator to access nullable property

### Nullish Coalescing

- `??`: set default value only when left handside value equals to `null` or `undefined`
- `||`: set default value when left handside value is `falsy` value

```ts
const userInput = null;

const storeData = userInput ?? "DEFAULT";
const storeData1 = userInput || "DEFAULT";
```

## Section 7: Generics

### What are `generics`?

```ts
const names = ["Max", "Manuel"]; // string[]
const names = []; // any[]

const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => {
  data.split(" "); // data is string type
});
```

A generic type is a type which is kind of connected which some
other type and is really flexible regarding which exact type that
other type is.

A certain type, in this case the `Array` type might simply work
better or work at all if you providde an additional information
about a type of data that's provided in this `Array` type

Generic types help you to get additional type information if you've
got a more complex class or more complex function that does something
with the data that's coming in in a way where it doesn't really care
about the data being of one particular type, but where you want
to store the type information of the incoming data to get better
typescript support.

### Creating a `generic` function

We want to create a function to merge 2 objects and return new
object

```ts
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

class Student {}
class Teacher {}

const s1 = new Student();
const s2 = new Student();

const s3 = merge(s1, s2); // type 'Object'

const t1 = new Teacher();
const t2 = new Teachner();

const t3 = merge(t1, t2); // type 'Object'

const s4 = s3 as Student; // manually cast
const t4 = t3 as Student; // manually cast
```

So, how can we continue to use the `merge` function and
get better type support.

Write generic function

```ts
function merge<T, U>(objA: T, objB: U) {
  return Oject.assign(objA, objB);
}

class Student {}
class Teacher {}

const s1 = new Student();
const s2 = new Student();

const s3 = merge<Student, Student>(s1, s2); // type 'Student'
```

### Working with `constraints`

Restrict the type of generic types.

```ts
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Oject.assign(objA, objB);
}
```

Another generic function

```ts
interface Lengthy {
  length: number;
}

function countAndDescribe<T exntends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.'

  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
  }

  // tuple
  return [element, descriptionText]
}

console.log(countAndDescribe("Hello World"))
console.log(countAndDescribe([1, 2, 3]))
```

With generic type we can be more flexible, we don't care about the
exact type. We only care about the fact that its type has a length
property (through constraint)

### The `keyof` constraint

```ts
function extractAndConvert<T extends object, U keyof T>(obj: T, key: U) {
  return obj[key];
}

const obj = { name: 'hieu' }
extractAndConvert(obj, 'name')
```

### Generic classes

```ts
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();

class Student {}
const studentStorage = new StudentStorage<Student>();

// error when removing before object is reference type
studentStorage.removeItem({ name: "Max" });
```

To fix the `removeItem` method when working with `reference type`. We
restrict the `DataStorage` to only work with `primitive type`

```ts
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();

class Student {}
const studentStorage = new StudentStorage<Student>();

// error when removing before object is reference type
studentStorage.removeItem({ name: "Max" });
```

### Generic utility types

[Learn more](https://www.typescriptlang.org/docs/handbook/utility-types.html)

```ts
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // all props are optional
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;

  return courseGoal as CourseGoal;
}

// lock array
const names: Readonly<string[]> = ["Max", "Sports"];

// error
names.push("something");
names.pop();
```

### Generic types vs Union types

### Sumarry

Generic type gives use flexibility combined with type safety.
We're flexible regarding the values we pass in or the values we use
in a class but we got full type support for what we then do with the
class or with the result of a generic function because `ts` then knows which
concrete type we pass in when we call the function.
