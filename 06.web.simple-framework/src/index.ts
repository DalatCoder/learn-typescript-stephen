import { User } from './models/User';

const user = new User({ name: 'Hieu', age: 20 });

user.on('change', () => {
  console.log('Change');
});

user.trigger('change');

console.log(user.get('name'));
