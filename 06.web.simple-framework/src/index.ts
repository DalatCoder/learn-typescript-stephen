import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log('Receive new collection');
});

collection.fetch();
