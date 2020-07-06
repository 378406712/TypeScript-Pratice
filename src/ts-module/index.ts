// import * as Info from './a'
// import { default as app } from './a'
// import acc from './a'
// console.log(Info)
// acc()
// app()
// import name = require('./c')
// console.log(name)

// import ttmoments from 'moment'
// import ttmoment = require('moment')
// import * as Moment from 'moment'
// console.log(ttmoments === ttmoment)
// console.log(Moment)

/// <reference path = "./space.ts" />
let isWORD = Validation.checkLetter('123123')
console.log(isWORD)

namespace Shapes {
  export namespace Polygons {
    export class Circle {}
    export class Triangle {
      tri() {
        console.log(this)
      }
    }
  }
}

import Polygons = Shapes.Polygons
let triangle = new Polygons.Triangle()
