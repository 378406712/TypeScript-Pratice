export interface FuncInterface {
  name: string
  (arg: number): string
}

export class ClassC {}
class ClassD {}

export { ClassD }
export { ClassD as ClassNameD }
export * from './b'
export default function acc(){
    console.log('acc')
}
