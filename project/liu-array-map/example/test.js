"use strict";
exports.__esModule = true;
var ArrayMap = require("../dist/liu-array-map");
var result = ArrayMap([2, 3], function (item) {
    return item * 9;
});
console.log(result);
