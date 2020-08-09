import { User } from './models/User';

const user = new User({ name: 'Hieu', age: 20 });

user.on('click', () => {
  console.log('On click 1');
});
user.on('click', () => {
  console.log('On click 2');
});
user.on('abc', () => {
  console.log('On abc click');
});

console.log(user);

user.trigger('click');
user.trigger('abc');
