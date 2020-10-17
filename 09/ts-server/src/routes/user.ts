import * as Koa from 'koa'
import {get, post, middlewares} from '../utils/route-decors'

const users = [{
  name: 'tom',
  age: 20
}]

@middlewares([
  async function guard(ctx, next) {
    if(ctx.header.token) {
      await next()
    } else {
      throw '请登录'
    }
  }
])
export default class User {
  @get('/users')
  public list(ctx: Koa.Context) {
    ctx.body = {
      ok:1,
      data: users
    }
  }

  @post('/users', {
    middlewares: [
      async function Validation(ctx, next) {
        // 用户名必须
        const name = ctx.request.body.name
        if(!name) {
          throw '请输入用户名'
        } 
        await next()
      }
    ]
  })
  public add(ctx: Koa.Context) {
    users.push(ctx.request.body) 
    ctx.body = {ok : 1}
  }
}