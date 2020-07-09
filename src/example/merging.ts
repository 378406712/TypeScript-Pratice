interface InfoInter {
  name: string
  getRes(input: string): number
}

interface InfoInter {
  age: number
  getRes(input: number): string
}

// 接口声明合并
let infoInter: InfoInter = {
  name: 'liu',
  age: 24,
  getRes(name: any): any {
    if (typeof name === 'string') return name.length
    else return name.toString(2)
  }
}

// console.log(infoInter.getRes(1))

function countUp() {
  CountUp.counts++
}

namespace CountUp {
  export let counts = 0
}
console.log(CountUp.counts)
countUp()
console.log(CountUp.counts)
countUp()
console.log(CountUp.counts)
countUp()

enum Colors {
  red,
  green,
  pink
}
namespace Colors {
  export const yellow = 3
}
console.log(Colors)
