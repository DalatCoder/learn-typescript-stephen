import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

/*
const numbers = new NumbersCollection([10, 5, 0, -3]);
const characters = new CharactersCollection("aXaabB")
const sorter = new Sorter(numbers);
*/

const characters = new CharactersCollection('aXaabB');
const sorter = new Sorter(characters);
sorter.sort();
console.log(characters.data);
