const koa = require('koa');
const app = new koa()


const session = require('koa-session')


app.keys = ['some secret']

const SESS_CONFIG = {
  key: 'ran:sess',
  maxAge: 86400000,
  httpOnly: true,
  signed: false 
}


app.use(session(SESS_CONFIG, app))

app.use(ctx => {
  if(ctx.path === '/favicon.ico') return

  // 获取
  let n = ctx.session.count || 0

  // 设置
  ctx.session.count = ++n
  ctx.body = `第${n}次访问`
})



app.listen(3000)