import { User } from './models/User';

const user = new User({ id: 1, name: 'Hieu', age: 20 });

user.on('save', () => {
  console.log(user.get('name'));
});

user.save();
console.log(user.get('name'));
