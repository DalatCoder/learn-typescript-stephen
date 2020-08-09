interface UserProps {
  name?: string;
  age?: number;
}

// Type alias for a function named Callback that take no argument and return nothing
type Callback = () => void;

export class User {
  // Events object store all events and its callbacks
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
}
