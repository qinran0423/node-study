const fs = require('fs')
const path = require('path');
const Router = require('koa-router')

function load(dir, cb) {
  const url = path.resolve(__dirname, dir)
  const files = fs.readdirSync(url)
  files.forEach(filename => {
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    cb(filename, file)
  })
}

function initRouter() {
  const router = new Router()
  load('routes', (filename, routes) => {
    const prefix = filename === 'index' ? '' : `/${filename}`
    // 对象遍历
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')
      console.log(`正在映射：${method.toUpperCase()} ${prefix}${path}`);

      router[method](prefix + path, routes[key])
    })  
  })

  return router
}


module.exports = {initRouter}