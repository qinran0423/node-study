const koa = require('koa');
const {initRouter, initController, initService, loadConfig} = require('./ran-loader')


class ran { 
  constructor(conf) {
    this.$app = new koa(conf)
    loadConfig(this)
    this.$service = initService(this)
    this.$ctrl = initController(this)
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())
  }

  start(port) {
    this.$app.listen(port, () => {
      console.log('服务器启动成功'+port);
    })
  }
}

module.exports = ran