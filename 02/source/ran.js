const http = require('http')
const context = require('./context')
const response = require('./response')
const request = require('./request')


class RAN {
  constructor() {
    this.middlewares = []
  }
  
  listen(...args) {
    const server = http.createServer(async (req, res) => {
      // this.callback(req, res)
      const ctx = this.createContext(req, res)

      // this.callback(ctx)
      const fn = this.compose(this.middlewares)
      await fn(ctx)
      // 响应
      res.end(ctx.body)
    })

    server.listen(...args)
  }


  // use(callback) {
  //   this.callback = callback
  // }
  use(middleware) {
    this.middlewares.push(middleware)
  }
  createContext(req, res) {
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)

    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res

    return ctx
  }

  compose(middleware) {
    return function(ctx) {
      return dispatch(0)
  
      function dispatch(i) {
        let fn = middleware[i]
        if(!fn) {
          return Promise.resolve()
        }
        return Promise.resolve(
          fn(ctx, function next() {
            // 下一级的Promise
            return dispatch(i+1)
          })
        )
      }
    }
  }
}


module.exports = RAN