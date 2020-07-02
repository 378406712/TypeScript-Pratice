const test = 1
const getIndex = () => {
  return 2
}
enum Status {
  Uploading = 3,
  Success = test,
  Failed = getIndex()
}
console.log(Status.Uploading)
// console.log(Status['Success'])

enum List {
  list1 = ' i m one',
  list2 = ' i m two',
  list3 = list1
}
enum Food {
  type = List.list3
}
console.log(Food.type)
// 异构枚举： 既包含字符串也包含数字
enum Result {
  nums = 1,
  strs = '2'
}
// 枚举值作为类型使用
// 不带初始值的枚举成员 emun A {}
// 值为字符串字面量 emub B {a='a'}
// 值为数值字面量 enmu C {c=-1}

enum Animal {
  DOG = 'dog',
  CAT = 'cat'
}
interface Dog {
  type: Animal.DOG
}
const dog: Dog = {
  // type:Animal.CAT,// 类型不匹配
  type: Animal.DOG
}
// 联合枚举类型
enum Value {
  Off,
  On
}
interface Light {
  status: Value
}
const light: Light = {
  status: Value.On
}

const enum Vegetables {
  Tomato = 'tomato'
}
