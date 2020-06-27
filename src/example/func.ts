const adds = (num1: number, num2: number): number => num1 + num2

// 类型别名
type myString = string
type Add2 = (x: number, y: number) => number
type Add3 = (x: myString, y: myString) => myString

const toAdd: Add2 = (x: number, y: number) => x + y
console.log(toAdd(1, 2))
console.log(123)

const AddFunc = (arg1, arg2, arg3) => arg1 + arg2 + (arg3 ? arg3 : 0)

// 必选参数不能位于可选参数之后
type AddFunc1 = (arg1: number, arg2?: number, arg3?: string) => string // 约束
let toAdd1: AddFunc1 = (x: number, y: number, z: string): string => x + y + z // 函数
console.log(toAdd1(1, 4, '6')) // 调用

let toFunc4 = (x: number, y: number = 4): number => x + y
console.log(toFunc4(1))

const toFunc5 = (x: number, ...args: number[]) => {
  // ...
}

// 函数重载
// 不能使用接口或者类型别名定义
function handleData(x: number) // 函数重载
function handleData(x: string) // 函数重载
function handleData(x: any): any {
  // 函数实体
  if (typeof x === 'string') return x.split('')
  else
    return x
      .toString()
      .split('')
      .map((item) => Number(item) * 10)
}
let len = handleData(11.5)
let lens = len.map((item) => Number(item).toFixed())
console.log(11.49999.toFixed())
console.log((0.1*10+0.2*10)/10===0.3)
