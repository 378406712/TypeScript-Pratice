import ArrayMap = require('../dist/liu-array-map')
const result = ArrayMap([2, 3], (item) => {
  return item * 9
}).forEach((item) => {
  console.log(item.toFixed())
})
console.log(result)
