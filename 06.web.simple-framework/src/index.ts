import { User } from './models/User';

const user = new User({ id: 1 });

user.fetch();
console.log(user);

user.set({ name: 'Ha', age: 21 });
user.save();
user.fetch();
console.log(user);
