"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
/*
const numbers = new NumbersCollection([10, 5, 0, -3]);
const characters = new CharactersCollection("aXaabB")
const sorter = new Sorter(numbers);
*/
var characters = new CharactersCollection_1.CharactersCollection('aXaabB');
var sorter = new Sorter_1.Sorter(characters);
sorter.sort();
console.log(characters.data);
