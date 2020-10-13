// const app = new (require('koa'))()
// const {initRouter} = require('./ran-loader')
// app.use(initRouter().routes())
// app.listen(3000)



const ran = require('./ran')
const app = new ran()
app.start(3000)