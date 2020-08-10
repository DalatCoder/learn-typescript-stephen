import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (data: UserProps): User => {
    return User.buildUser(data);
  }
);

collection.on('change', () => {
  console.log('Receive new collection');
});

collection.fetch();
