const app = new (require('koa'))()
const {initRouter} = require('./ran-loader')
app.use(initRouter().routes())
app.listen(3000)