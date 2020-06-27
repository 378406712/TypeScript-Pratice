// 布尔类型
// let bool: boolean = true
let bool: boolean
bool = true

// 数值
let num: number = 123
num = 0b1111011
num = 0o173
num = 0x7b
// 字符串
let str: string
str = 'abc'
str = `def${num}`

// console.log(str)

// 数组
// 写法1
let arr: number[] = [1, 2, 3]
// 写法2
let arr2: (string | number)[] = [4, 5, '6']
let arr3: Array<number> = [1, 2, 3]
console.log('arr3:' + '' + arr3)
// 元祖类型
let tuple: [string, number, boolean, null]
tuple = ['1', 2, false, null]

let tuple2: [string, (string | number)[]] = ['1', [1, 2, '3']]
console.log('tuple2:' + tuple2)

// 枚举类型
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN = 8,
  USER
}
console.log(Roles)

// any
let value: any
value = 'abc'
value = 123
value = true

const arr4: any[] = [1, '2']

// void：表示什么类型都不是

const consoleText = (text: string): void => {
  console.log(text)
}
let v: void
v = undefined
v = null
consoleText('123')

// null && undefined
let u: undefined
u = undefined

let n: null
n = null

// nerver类型 表示永远不存在的类型

// const errFunc = (msg: string): never => {
//   throw new Error(msg) // 返回值为never
// }
// errFunc('123')
// const infiniteFunc = (): never => {
//   while (true) {
//     console.log(1223)
//   }
// }
// let neverVar = (() => infiniteFunc())()

// num = neverVar
// console.log(num)

// object
let obj = {
  name: 'chen'
}
let obj2 = obj
obj2.name = 'chen'
console.log(obj)

function getObj(obje: object): void {
  this.obj = obje
  console.log(this.obj)
}
getObj({ name: 'liu' })
console.log(obj)

// 类型断言

const getLength = (target: string | number | boolean | number[]): number => {
  if ((<string>target).length || (<string>target).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}

console.log(getLength('123'))
console.log(getLength(45615125))
console.log(getLength(true))
console.log(getLength([1, 2, 3, 4, 5, 6]))
let anyValue: any = '蚂蚁部落'
let strLength: number = (<string>anyValue).length
console.log(strLength,'111')
