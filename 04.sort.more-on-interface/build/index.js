"use strict";
var Sorter = /** @class */ (function () {
    // Union operator
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        // this.collect.[methods] || only access methods that are common between number[] and string
        // If collection is an array of numbers
        if (this.collection instanceof Array) {
            // Full access to medthods defined for number[]
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }
        // If collection is a string, do this logic instead
        if (typeof this.collection === 'string') {
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
