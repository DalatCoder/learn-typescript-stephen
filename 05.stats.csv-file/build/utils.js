"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    // 20/10/2000 => ['20', '10', '2000'] => [20, 10, 2000]
    var dateParts = dateString
        .split('/')
        .map(function (part) { return parseInt(part); });
    // new Date(yy, mm, dd)
    // month is zero-base index, so we must subtract 1
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
