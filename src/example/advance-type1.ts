// 交叉类型

const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
  let res = <T & U>{}
  res = Object.assign(arg1, arg2)
  return res
}

let obj1 = mergeFunc({ a: 1 }, { b: 2 })

console.log(obj1)

// 联合类型 type1 | type2 | ...
const getLengthFunc = (content: string | number): number => {
  if (typeof content === 'string') {
    return content.length
  } else {
    return content.toString().length
  }
}
console.log(getLengthFunc('abc'))

// 类型保护
const valueList = [123, 'asd']
const getValueList = () => {
  const number = Math.random() * 10
  if (number < 5) return valueList[0]
  else return valueList[1]
}
const item = getValueList()
// function isString(value: string | number): value is string {
//   return typeof value === 'string'
// }
// if (isString(item)) console.log(item.length)
// else console.log(item.toFixed())

// typeof 保护  string/number/boolean/Symbol 四种之一
if (typeof item === 'string') console.log(item.length)
else console.log(item.toFixed())

// instance of 保护
class CreatedByClass1 {
  public name = 'liu'
}
class CreatedByClass2 {
  public age = 24
}
function getRandom() {
  return Math.random() < 0.5 ? new CreatedByClass1() : new CreatedByClass2()
}
const item1 = getRandom()
if (item1 instanceof CreatedByClass1) {
  console.log(item1.name)
} else {
  console.log(item1.age)
}

// null undefined
const sumFunc = (x: number, y?: number) => {
  return x + (y || 0)
}
const getLengthFunction = (value: string | null): number => {
  return (value || '').length
}
function getSplice(num: number | null): string {
  function getRes(prefix: string) {
    return prefix + num.toFixed().toString()
  }
  num = num || 0.1
  return getRes('liu-')
}
console.log(getSplice(1.2))

// 类型别名
type TypeString = string
let str2: TypeString
type Positions<T> = { x: T; y: T }
const p1: Positions<number> = {
  x: 1,
  y: -1
}
const p2: Positions<string> = {
  x: '1',
  y: '-1'
}

// 字面量
type Age = 18
interface Inf {
  name: string
  age: Age
}
const _inf: Inf = {
  name: 'liu',
  age: 18
}
