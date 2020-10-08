const Koa = require('koa')
const app = new Koa()

// CRUD
const config = require('./conf')
const {laodModel, loadModel} = require('./framework/loader')
loadModel(config)(app)

app.listen(3000, () => {
  console.log(`app started at port 3000`)
})