// function setName() {
//   console.log('get name')
//   return (target) => {
//     console.log('name')
//   }
// }

// function setAge() {
//   console.log('get age')
//   return (target) => {
//     console.log('age')
//   }
// }
// @setName()
// @setAge()
// class ClassDec {}

// 类装饰器
// 在类声明前声明
// 必须紧挨类声明

// let sign = null
// function setName(name: string) {
//   return (target: new () => any) => {
//     sign = target
//     console.log(target.name)
//   }
// }

// @setName('liu')
// class ClassDec {}

// 属性

// function addName(constructor: new () => any) {
//   constructor.prototype.name = 'Liu'
// }
// @addName
// class DD {}
// interface DD {
//   name: string
// }
// const d = new DD()
// // console.log(d.__proto__.name)
// console.log(d.name)

// // 方法装饰器
// // 运行时被当做函数调用，有3个参数。
// // 第一个参数：装饰静态成员时,代表类构造函数;装饰实例时，代表类的原型对象
// // 第二个参数:  成员名
// // 成员属性描述符
// // configurable 可配置
// // writeable 可写
// // enumerable 可枚举
// // 使用Object.defineProperty改写

// interface Objex {
//   [key: string]: any
// }
// let obj12: Objex = {
//   age: '123'
// }

// Object.defineProperty(obj12, 'name', {
//   value: 'chen',
//   configurable: true,
//   writable: true,
//   enumerable: true
// })
// obj12.name = 'XXXXXXXXXXXX'
// console.log(obj12.name)

// for (const key in obj12) {
//   console.log(key)
// }

// function enumerable(bool: boolean) {
//   return (target: any, propertyName: string, descriptor: PropertyDecorator) => {
//     descriptor.enumerable = bool
//     console.log(target, propertyName)
//   }
// }
// class ClassF {
//   constructor(public age: number) {}
//   @enumerable(false)
//   public getAge() {
//     return this.age
//   }
// }
// let classF = new ClassF(18)
// console.log(classF)

//  访问器修饰器
//  参数(同方法参数器)

// function enumerable(bool: boolean) {
//   return (target: any, propertyName: string, descriptor: PropertyDecorator) => {
//     descriptor.enumerable = bool
//   }
// }

// class ClassG {
//   private _name: string
//   constructor(name: string) {
//     this._name = name
//   }
//   @enumerable(true)
//   get name() {
//     return this._name
//   }
//   set name(name) {
//     this._name = name
//   }
// }
// const classG = new ClassG('lzw')
// for (const key in classG) {
//   console.log(key)
// }

// 属性装饰器
// 判断某个类中是否声明了某个属性名
// function printProperName(target: any, properName: string) {
//   console.log(properName)
// }

// class H {
//   @printProperName
//   public name: string
// }

// 参数装饰器
// function required(target: any, properName: string, index: number) {
//   console.log(`修饰${properName}的${index + 1}`)
// }
// class ClassI {
//   public name: string = 'lzw'
//   public age: number = 24
//   public getInfo(prefix: string, @required infoType: string): any {
//     return prefix + ' ' + this[infoType]
//   }
// }
// interface ClassI {
//   [key: string]: string | number | Function
// }
// const classi = new ClassI()

// console.log(classi.getInfo('2333', 'age'))
function logProp(params: any) {
  return function (target: any, attr: any) {
    console.log(target) // { constructor:f, getData:f }
    console.log(attr, '111111111111111') // url
    target[attr] = params //通过原型对象修改属性值 = 装饰器传入的参数
    target.api = 'xxxxx' //扩展属性
    target.run = function () {
      console.log('run...')
    }
  }
}
class HttpClient {
  @logProp('http://baidu.com')
  public url: any | undefined
  constructor() {}
  getData() {
    console.log(this.url)
  }
}
var http: any = new HttpClient()
http.getData() // http://baidu.com
console.log(http.api) // xxxxx
http.run() // run...
