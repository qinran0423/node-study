import * as glob from 'glob'
import * as Koa from 'koa'
import * as KoaRouter from 'koa-router'

const router = new KoaRouter()

type HTTPMethod = 'get' | 'put' | 'del' | 'post' | 'patch'

type LoadOptions = {
    extname?: string
}

type RouteOptions = {
    prefix?: string;
    middlewares?: Array<Koa.Middleware>
}

export const method = (router: KoaRouter) => method => (path: string, options: RouteOptions = {}) => {
  return  (target, property) => {
    process.nextTick(() => {
      const middlewares = []

      if(target.middlewares) {
        middlewares.push(...target.middlewares)
      }

      // 添加中间件
      if(options.middlewares) {
        middlewares.push(...options.middlewares)
      }
      middlewares.push(target[property])
      router[method](path, ...middlewares)
    })
  }
}


const decorate = method(router)

export const get = decorate('get')

export const post = decorate('post')

export const middlewares = function middlewares(middlewares: Koa.Middleware[]) {
  return function(target) {
    target.prototype.middlewares = middlewares

  }
}


export const load = (folder: string) : KoaRouter => {
  const extname = '.{js,ts}'
  
  glob.sync(require('path').join(folder, `./**/*${extname}`))
  .forEach(item => require(item))

  return router
}