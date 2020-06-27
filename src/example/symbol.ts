const s1 = Symbol('liu')
const s2 = Symbol('chen')
let sym = Symbol.for('s1')
let objs = {
  [Symbol.hasInstance](other) {
    console.log(other)
  }
}
console.log({ a: 1 } instanceof <any>objs)
