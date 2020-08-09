import { User } from './models/User';

const user = new User({ name: 'Hieu', age: 20 });

console.log(user.get('name'));
user.set({ name: 'Ha' });
console.log(user.get('name'));
