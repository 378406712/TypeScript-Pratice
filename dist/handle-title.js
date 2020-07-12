function setTitle(title) {
  document && (document.title = title)
}

function getTitle() {
  return document ? document.title : ''
}
let documentTitle = getTitle()
// function getA(a) {
//   var b
//   a && (b = 2)
//   return b
// }
// console.log(getA(1))
