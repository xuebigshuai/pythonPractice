var arrww = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(parseInt)
console.log(arrww)
var obj = {
  a: 1,
  b: 2
}
let { a, b } = obj
console.log(a, b)
class WaiterClass {
  constructor() {
    this.name = "xue"
  }
  getName() {
    return this.name
  }
  /**
   * @param {any} value 新值
   */
  set FullName(value) {
    this.name = value
  }
  get FullName() {
    return this.name
  }
}

const people = new WaiterClass()
console.log(people.FullName)
console.log(people.getName())
setTimeout(()=>{console.log(5000)},5000)

