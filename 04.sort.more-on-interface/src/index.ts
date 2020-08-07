import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

/*
const numbers = new NumbersCollection([10, 5, 0, -3]);
const characters = new CharactersCollection("aXaabB")
const sorter = new Sorter(numbers);
*/

/*
const characters = new CharactersCollection('aXaabB');
const sorter = new Sorter(characters);
sorter.sort();
console.log(characters.data);
*/

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(100);
linkedList.add(-5);
linkedList.add(0);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
