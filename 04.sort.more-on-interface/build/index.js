"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbers = new NumbersCollection_1.NumbersCollection([10, 5, 0, -3]);
numbers.sort();
console.log(numbers.data);
var characters = new CharactersCollection_1.CharactersCollection('aXaabb');
characters.sort();
console.log(characters.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(100);
linkedList.add(-5);
linkedList.add(0);
linkedList.sort();
linkedList.print();