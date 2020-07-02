class Point {
  private x: number
  public y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  getPosition() {
    return `(${this.x},${this.y})`
  }
}
const point = new Point(1, 2)
console.log(point.getPosition())

class Parent {
  private name: string
  protected constructor(name: string) {
    this.name = name
  }
  protected getPosition() {
    return `(${this.name})`
  }
}
// 给constructor添加protected后无法实例化该类
// const p = new Parent('chen')

class Child1 extends Parent {
  constructor(name: string) {
    super(name)
    // console.log(super.name)
  }
}
console.log(new Child1('liu'))

// protect
class Child2 extends Parent {
  constructor(name: string) {
    super(name)
    console.log(super.getPosition())
  }
}
const child2 = new Child2('guo')
console.log(child2)

// readonly

class User {
  public readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const user = new User('liu')
// user.name = 'chen' // 无法分配到 "name" ，因为它是只读属性
console.log(user)

// 参数访问限定符 public private protected readonly
// 1.规定属性类型 2.将该属性添加到实例上
class A {
  constructor(readonly name: string) {}
}
const a = new A('liu')
console.log(a)
console.log('--------------')

// class Boy {
//   public static getAge() {
//     return Boy.age
//   }
//   private static age: number = 18
// }
// const boy = new Boy()
// // console.log(Boy.age) // 属性“age”为私有属性，只能在类“Boy”中访问。

class Info {
  public name: string
  public age: number
  private _infoStr: string

  constructor(name: string, age?: number, public sex?: string) {
    this.name = name
    this.age = age
  }
  get infoStr() {
    console.log('getter')
    return this._infoStr
  }
  set infoStr(value: string) {
    console.log('setter' + value)
    this._infoStr = value
  }
}
let info1 = new Info('liu')
let info2 = new Info('chen', 24)
let info3 = new Info('chen', 24, 'nv')
console.log(info3)
console.log('--------------')

// 存取器

info2.infoStr = 'liu:24'
console.log(info2.infoStr)

console.log('--------------')

// 抽象类
// abstract class People {
//   constructor(public name: string) {}
//   /**
//    * name
//    */
//   public abstract printName(): void
// }

// // const p1 = new People() //无法创建抽象类的实例

// // 非抽象类“Man”不会实现继承自“People”类的抽象成员“printName”。
// class Man extends People {
//   constructor(name: string) {
//     super(name)
//   }
//   // 子类自己实现printName
//   printName() {
//     console.log(this.name)
//   }
// }
// const man = new Man('liu')
// man.printName()

abstract class People {
  abstract _name: string
  abstract get insideName(): string
  abstract set insideName(value: string) // 存值器函数不能标记返回值类型
}
// 抽象方法和抽象存取器都不能包含实际的代码块，只需要指定他属性名方法名方法参数返回值类型
class P extends People {
  // 非抽象类继承抽象类时，要去实现抽象类中的抽象属性跟抽象方法
  public _name: string
  public insideName: string
}

// 类使用implements 关键字 继承接口
interface Foo {
  type: string
}
// 接口检测是使用该接口定义的类创建的实例，即类的实例要符合该接口
class FooClass implements Foo {
  public type: string // 这里如果加了static就会报错，静态属性定义在类上，而不是实例上
}

// 接口继承类，继承类成员不包括其实现
class AA {
  protected names: string
}
interface I extends AA {}

// class BB implements I {
//   names:string
// }

// 受保护的属性只能在这个类跟其子类中访问
// 这里BB 继承的是接口I 而不是 AA,而AA中的属性是protected

class BB extends AA implements I {
  names: string
}

// 泛型中使用类
// new () 调用这个类的构造函数
const create = <T>(c: new () => T): T => {
  return new c()
}
class Infos {
  public age: number
  constructor() {
    this.age = 18
  }
}
console.log(create<Infos>(Infos).age) 
