import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([10, 5, 0, -3]);
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection('aXaabb');
characters.sort();
console.log(characters.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(100);
linkedList.add(-5);
linkedList.add(0);

linkedList.sort();
linkedList.print();
