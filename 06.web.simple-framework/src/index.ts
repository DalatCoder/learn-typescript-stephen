import { User } from './models/User';

const user = new User({ name: 'Hieu', age: 20 });

user.on('click', () => {});
user.on('click', () => {});
user.on('abc', () => {});

console.log(user);
