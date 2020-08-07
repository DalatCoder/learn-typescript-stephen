"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
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
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(100);
linkedList.add(-5);
linkedList.add(0);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
