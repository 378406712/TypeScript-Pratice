const name = 'liu'
const age = 18
class A {}
function foo() {
  console.log('foo')
}
export let time = new Date()

export {
  name as MyName,
  name as theName,
  age as Myage,
  foo as FuncFoo,
  A as ClassA
}

export const obj = {
  a: 1,
  b: 2
}
document.title = 'liu'
