// class Point {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
// }
// Point.prototype.getPoint = function () {
//   return `(${this.x}, ${this.y})`
// }
// const point = new Point(1, 2)
// console.log(point)
// console.log(point.getPoint())
// console.log(point.__proto__ === Point.prototype)

// class myAge {
//   constructor(age) {
//     this._age = age
//   }
//   set age(value) {
//     if (value > 18) console.log('成年' + value)
//     else console.log('未成年')
//     this._age = value
//   }
//   get age() {
//     return this._age
//   }
// }
// const infos = new myAge(19)
// infos.age = 3
// console.log(infos._age)
//class Info {
//   construtror(age) {
//     this._age = age
//   }
//   set age(newValue) {
//     console.log('age is' + newValue)
//     this._age = newValue
//   }
//   get age() {
//     return this._age
//   }
// }
// const infos = new Info(18)
// infos.age = 17
// console.log(infos.age)

class Static {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  static getValue(x, y) {
    return `静态:${x}, ${y}`
  }
  getValue() {
    return `普通${this.x}, ${this.y}`
  }
}
console.log(Static.getValue(1, 2))
const statics = new Static(3, 4)
console.log(statics.getValue())
console.log(Static.name)

class Points {
  constructor() {
    this.x = 0
  }
}
Points.y = 3
const p = new Points()
console.log(p)
