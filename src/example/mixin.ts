interface ObjA {
  a: string
}
interface ObjB {
  b: string
}
let Aa: ObjA = {
  a: 'a'
}
let Bb: ObjB = {
  b: 'b'
}
let AB = Object.assign(Aa, Bb)
console.log(AB)

// 类的混入
class ClassAa {
  public isA: boolean
  public funcA() {}
}
class ClassB {
  public isB: boolean
  public funcB() {}
}

class ClassC implements ClassAa, ClassB {
  public isA: boolean = true
  public isB: boolean = true
  funcA: () => void
  funcB: () => void
}

function mixins(base: any, from: any[]) {
  from.forEach((item) => {
    Object.getOwnPropertyNames(item.prototype).forEach((key) => {
      console.log(key)
      base.prototype[key] = item.prototype[key]
    })
  })
}

mixins(ClassC, [ClassAa, ClassB])
const ab = new ClassC()
console.log(ab)
