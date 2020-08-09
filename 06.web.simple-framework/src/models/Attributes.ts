import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  // <K extends keyof T> : Generic constraints - Limit the type that K can be
  // A value of K can only be one of value of T
  // T: { name: string, age: number, id: number } => K = (name | age | id)
  // We only can call get with 'name', 'age', 'id' | In TS: string can be type
  // get(key: 'name')
  // get('hello') => Error: 'hello' isn't type of 'name'
  // get('name') => OK 'name' is type of 'name'
  // T[K]: Look up the value of K in T and return the value at that key
  // T['name'] => string
  // T['age'] => number
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    this.data = { ...this.data, ...update };
  }
}

const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'Hieu',
});

const name = attrs.get('name'); // Type string
const age = attrs.get('age'); // Type number
const id = attrs.get('id'); // Type number
