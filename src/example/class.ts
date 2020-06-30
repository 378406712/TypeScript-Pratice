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
  public name: string
  constructor(name: string) {
    this.name = name
  }
}
class Child extends Parent {
  constructor(name: string) {
    super(name)
  }
}
console.log(new Child('liu'))