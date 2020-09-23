// const http = require('http')
// const server = http.createServer((req, res) => {
//   res.writeHead(200)
//   res.end('hi kaikeba')
// })
// server.listen(3000, () => {
//   console.log('监听端口3000')
// })



const RAN = require('./ran')
const app = new RAN()

app.use((req, res) => {
  res.writeHead(200)
  res.end('hi randy')
})


app.use(ctx => {
  ctx.body = 'radny'
})

app.listen(3000, () => {
  console.log('监听3000');
})