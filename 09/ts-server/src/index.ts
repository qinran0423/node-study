import * as Koa from 'koa'
import * as bodify from 'koa-body';
import * as Router from 'koa-router'
import {load} from './utils/route-decors'
import {resolve} from 'path'


const app = new Koa();
app.use(
  bodify({
    multipart: true,
    // 使用非严格模式，解析 delete 请求的请求体 
    strict: false,
  })
)

// const router = new Router()
// router.get('/abc', ctx => {
//   ctx.body = 'abc'
// })
// app.use(router.routes())

const router = load(resolve(__dirname, './routes'))
app.use(router.routes())

app.listen(3000, () => { console.log('服务器启动成功'); });





// function decorate(target, property, descriptor) {
//   const old = descriptor.value
//   descriptor.value = msg => {
//     msg = `[${msg}]`
//     return old.apply(null, [msg])
//   }

//   return descriptor
// }



// class Log {

//   @decorate // 注解
//   print(msg) {
//     console.log(msg);
//   }
// }

// // const dec = sender => (target, property) => {
// //   const old = target.prototype.print
// //   target.prototype[property] = msg => {
// //     console.log(`执行了 ${property}方法 参数 ${msg}` );
    
// //     msg = `${sender} : {${msg}}`
// //     old(msg)
// //   }
// // }
// // dec('RandyQin')(Log, 'print')

// const log = new Log()

// log.print('Hello TS')
