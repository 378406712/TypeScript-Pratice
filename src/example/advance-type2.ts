// class Counter {
//   constructor(public count: number = 0) {}
//   public add(value: number) {
//     this.count += value
//     return this
//   }
//   public subtract(value: number) {
//     this.count -= value
//     return this
//   }
// }
// let counter1 = new Counter(10)
// console.log(counter1.add(3).subtract(1))

// class PowCounter extends Counter {
//   constructor(public count: number = 0) {
//     super(count)
//   }
//   public pow(value: number) {
//     this.count = this.count ** value
//     return this
//   }
// }
// let pow1 = new PowCounter(2)
// console.log(pow1.pow(3))
// console.log('app'.repeat(3))

// keyof
interface Infoss {
  name: string
  age: number
}
let infoProp: keyof Infoss
infoProp = 'name'
infoProp = 'age'

function getValues<T, K extends keyof T>(obj: T, name: K[]): T[K][] {
  return name.map((item) => obj[item])
}
const infoObj = {
  name: 'chen',
  age: 18
}
let values = getValues(infoObj, ['name', 'age'])
console.log(values)

// [] 索引访问操作符
const Infoss = infoObj['name']
interface Objs<T> {
  [key: string]: T
}
let keys: keyof Objs<number>

// 映射类型
// Readonly  Partial
interface Message {
  age: number
  name: string
  sex: string
}
type ReadOnlyMessage<T> = {
  readonly [P in keyof T]?: T[P]
}
// type ReadOnlyMsg1 = ReadOnlyMessage<Message>
type ReadOnlyMsg1 = Readonly<Message>
type ReadOnlyMsg2 = Partial<Message>
let message: ReadOnlyMsg1 = {
  age: 18,
  name: 'chen',
  sex: 'nv'
}
// message.age = 19

// Pick Record

type Proxy<T> = {
  get(): T
  set(value: T): void
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

const stringIndex = 'a'
const numberIndex = 1
const symbolIndex = Symbol()
type Objss = {
  [stringIndex]: string
  [numberIndex]: number
  [symbolIndex]: symbol
}
type keysType = keyof Objss
type ReadonlyTypes<T> = {
  readonly [P in keyof T]: T[P]
}
let objs3: ReadonlyTypes<Objss> = {
  a: 'aa',
  1: 11,
  [symbolIndex]: Symbol()
}
// objs3.a ='1'

type MapToPromise<T> = {
  [K in keyof T]: Promise<T[K]>
}
type Tuple = [number, string, boolean]
type promiseTuple = MapToPromise<Tuple>
let tuples: promiseTuple = [
  new Promise((resolve, reject) => resolve(1)),
  new Promise((resolve, reject) => resolve('1')),
  new Promise((resolve, reject) => resolve(true))
]

// unknown
// 1. 任何类型的值都可赋值给unknown类型
let value1: unknown
value1 = 1
value1 = '123'

// 2. 如果没有类型断言或者基于控制流的类型细化时，unknown不可赋值给其他类型
// 此时只能赋值给unknown和any

let value2: unknown
// let value3: string = value2

// 3. 如果没有类型断言或者基于控制流的类型细化时，不能在它上面进行任何计算操作
let value4: unknown
// value4 += 1

// 4. unknown与任何其他类型组成的交叉类型，最后都等于其他类型
type types1 = string & unknown

// 5. unknown与任何其他类型（除了any）组成的联合类型，都等于unknown
type types2 = unknown | string // unknown
type types3 = unknown | any // any

// 6. never类型是unknown类型的子类型
type types4 = never extends unknown ? true : false // true

// 7. keyof unknown 等于类型never
type types5 = keyof unknown // never

// 8. 只能对unknown进行等或不等操作，不能进行其他操作
console.log(value1 === value2)

// 9. unknown 不能访问它的属性，作为函数调用和作为类创建实例
// 10.使用映射类型时，如果遍历的是unknown时，则不会映射任何属性
type Types1<T> = {
  [P in keyof T]: number
}
type types6 = Types1<any>
type types7 = Types1<unknown>

// 条件类型
type Types2<T> = T extends string ? number : string
let index1: Types2<'a'>

// 分布式条件类型
type typeName<T> = T extends any ? T : never
type Types3 = typeName<string | number>

type TypeNames1<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends undefined
  ? undefined
  : T extends () => void
  ? () => void
  : object
type Types4 = TypeNames1<() => void>

type Diff<T, U> = T extends U ? never : T
type Types5 = Diff<string | number | boolean, undefined | number>

// infer  条件类型推断
type Type8<T> = T extends any[] ? T[number] : T
type Test8 = Type8<number | string[]>
type Test88 = Type8<string>

type Type9<T> = T extends [infer U] ? U : T
type Test99 = Type9<string[]>

// Exclude
type Type10 = Exclude<'a' | 'b' | 'c', 'b'>

// Extract<T,U>
type Type11 = Extract<'a' | 'b' | 'c', 'b' | 'c'>

// NonNullable<T> 去除null  undefined
type Type12 = NonNullable<string | null | undefined>

// ReturnType<T>获取函数的返回值类型
type Type13 = ReturnType<() => string>

// InstanceType 获取实例类型
class Acc {}
type Instan1 = InstanceType<typeof Acc>
type Instan2 = InstanceType<any>
type Instan3 = InstanceType<never>
// type Instan4 = InstanceType<string>
