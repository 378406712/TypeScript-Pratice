// function getIndexx() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(1)
//       resolve()
//     }, 2000)
//   })
// }
// async function ResIndexx() {
//   await getIndexx()
//   console.log(2)
// }
// ResIndexx()

interface Res {
  data: {
    [key: string]: any
  }
}

namespace axios {
  export function post(url: string, config: object): Promise<Res> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res: Res = { data: {} }
        if (url === '/login') {
          res.data.user_id = 123
          resolve(res)
        } else {
          res.data.role = 'admin'
          resolve(res)
        }
      }, 1000)
    })
  }
}
interface Info1 {
  user_name: string
  password: string
}
async function loginReg({ user_name, password }: Info1) {
  try {
    console.log(123)
    const res = await axios.post('/login', { data: { user_name, password } })
    return res
  } catch (e) {
    throw new Error(e)
  }
}

async function roleReg(user_id: number) {
  try {
    const res = await axios.post('/user_roles', { data: { user_id } })
    return res
  } catch (e) {
    throw new Error(e)
  }
}

loginReg({ user_name: 'liu', password: '123' }).then((res) => {
  console.log(res)

  const {
    data: { user_id }
  } = res
  roleReg(user_id).then((res) => {
    const {
      data: { role }
    } = res
    console.log(role)
  })
})

async function getTime(format: string) {
  const moment = await import('moment')
  return moment.default().format(format)
}
getTime('L').then((res) => console.log(res))

interface ObjIn {
  name?: string
  age?: number
}
let objIn = { sex: 'man' }
function getInfoxx(info: ObjIn) {
  console.log(info)
}
getInfoxx(objIn as ObjIn)
