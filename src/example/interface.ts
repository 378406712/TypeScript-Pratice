// interface NameInfo {
//   FirstName: string
//   LastName: number | string
// }
// const getName = ({ FirstName, LastName }: NameInfo): string => {
//   return `${FirstName} ${LastName}`
// }
// const user = getName({ FirstName: 'chen', LastName: 123 })
// console.log(user)

interface Vegetable {
  color?: string
  readonly type: string
  //   [prop: string]: any // 索引签名
}

const getVegetable = ({ color, type }: Vegetable): string => {
  return `${color ? '颜色是:' + color : ''} ${type}`
}
const vegetableInfo = { type: '番茄', color: 'red', size: 2 }
// console.log(getVegetable({ type: '番茄', color: 'red', size: 2 } as Vegetable))
// console.log(getVegetable({ type: '番茄', color: 'red', size: 2 } as Vegetable))
console.log(getVegetable(vegetableInfo))

let vegetableObj: Vegetable = {
  type: 'tamato'
}
vegetableObj.color = 'yellow'
console.log(vegetableObj)

interface Arr {
  0: number
  1: string
}
let arrs: Arr = [123, '123']
// arr[0] = '123'

// 类型别名形式
type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (n1, n2) => n1 + n2

console.log(add(1, 2))

// 索引类型
interface Role {
  [id: number]: string
}

interface Role1 {
  [id: string]: string
}
const roles: Role = {
  0: '0'
}
const roles1: Role1 = {
  0: '0' // 先将number转为字符串
}

// 接口继承
interface Ball {
  color: string
}

interface Toy extends Ball {
  //   color: string
  type: string
}
interface Doll extends Ball {
  //   color: string
  length: number
}

const toyBear: Toy = {
  color: 'brown',
  type: 'doll'
}
const baby: Doll = {
  length: 5,
  color: 'blue'
}

// 混合类型接口
interface Counter {
  (): void
  count: number
}
const getCounter = (): Counter => {
  const c = () => {
    c.count++
  }
  c.count = 0
  return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count)
