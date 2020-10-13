
// 对象 =》  对象工厂 升阶
module.exports = app => ({
  // 'get /': async ctx => {
  //   ctx.body = '首页'
  // },
  'get /': app.$ctrl.home.index,
  // 'get /detail': async ctx => {
  //   ctx.body = '详细页面'
  // }
  'get /detail':app.$ctrl.home.detail
}) 