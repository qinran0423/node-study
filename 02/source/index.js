const Ran = require('./ran');

const app = new Ran()


app.use((req, res) => {
  res.writeHead(200)
  res.end('hi Randy')
})


app.listen(3000,() => {
  console.log('监听端口')
})