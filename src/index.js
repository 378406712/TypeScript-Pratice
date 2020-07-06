var Validation;
(function (Validation) {
    var isWords = /\^[A-Za-z]$/;
    Validation.isNumber = /^[0-9]$/;
    Validation.checkLetter = function (text) {
        return isWords.test(text);
    };
})(Validation || (Validation = {}));
// import * as Info from './a'
// import { default as app } from './a'
// import acc from './a'
// console.log(Info)
// acc()
// app()
// import name = require('./c')
// console.log(name)
// import ttmoments from 'moment'
// import ttmoment = require('moment')
// import * as Moment from 'moment'
// console.log(ttmoments === ttmoment)
// console.log(Moment)
/// <reference path = "./space.ts" />
var isWORD = Validation.checkLetter('123123');
console.log(isWORD);
var Shapes;
(function (Shapes) {
    var Polygons;
    (function (Polygons) {
        var Circle = /** @class */ (function () {
            function Circle() {
            }
            return Circle;
        }());
        Polygons.Circle = Circle;
        var Triangle = /** @class */ (function () {
            function Triangle() {
            }
            Triangle.prototype.tri = function () {
                console.log(this);
            };
            return Triangle;
        }());
        Polygons.Triangle = Triangle;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
var Polygons = Shapes.Polygons;
var triangle = new Polygons.Triangle();
console.log(triangle.tri())