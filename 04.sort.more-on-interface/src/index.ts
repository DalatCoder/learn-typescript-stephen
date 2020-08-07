import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([10, 5, 0, -3]);
const sorter = new Sorter(numbers);

sorter.sort();
console.log(numbers.data);
