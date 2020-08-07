"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    // Union operator
    function Sorter(collection /*TODO: fixme*/) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
