// const getArr = <T>(value: T, times: number = 5): T[] => {
//   return new Array(times).fill(value)
// }
// let len = getArr<string>('123', 3).map((item) => item.length)
// let lens = getArr<number>(123, 3).map((item) => Number(item.toFixed()))
// console.log(len)
// console.log(lens)

// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//   return new Array(times).fill([param1, param2])
// }
// console.log(getArray('1123123', '2', 3).map((item) => item[0].length))
// console.log(getArray(1, 2.9, 3).map((item) => item[1].toFixed()))

// let getArrays: <S, N>(value: S, times: N) => S[]
// getArrays = (value, times) => {
//   return new Array(times).fill(value)
// }
// console.log(getArrays<string, number>('1', 2))

// let getArrays: <S>(value: S, times: number) => S[]
// getArrays = (value, times) => {
//   return new Array(times).fill(value)
// }
// console.log(getArrays<string>('1', 2))

// interface GetArray {
//   <S>(value: S, times: number): S[]
// }
// type GetArray = <S>(value: S, times: number) => S[]
// let getArrays: GetArray = (value, times) => {
//   return new Array(times).fill(value)
// }
// console.log(getArrays('1', 2))

// 泛型约束
// interface ArrayLength {
//   length: number
// }

// const getArr = <T extends ArrayLength>(value: T, times): T[] => {
//   return new Array(times).fill(value)
// }
// console.log(getArr('1', 2))
// console.log(getArr({ a: 1, length: 2 }, 2))
// console.log(getArr(1,2)

// let getArr = <T, K extends keyof T>(obj: T, key: K) => {
//   return obj[key]
// }
// let obje = {
//   a: 1,
//   b: 2
// }
// console.log(getArr(obje, 'a'))
// console.log(getArr(obje, 'c')) // undefined
