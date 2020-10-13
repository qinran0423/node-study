module.exports = app => ({
  index: async () => {
    // ctx.body = '首页CTRL'
    // console.log('ctrl',app.$service.user.getName());
    // const name = await app.$service.user.getName()
    // app.ctx.body = 'ctrl user:' + name
    app.ctx.body = await app.$model.user.findAll()
  },
  detail: async ctx => {
    app.ctx.body = '详情CTRL'
  }
})