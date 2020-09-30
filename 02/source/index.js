const Ran = require('./ran');

const app = new Ran()


app.use((ctx) => {
  ctx.body = 'hah'
})

 
app.listen(3000,() => {
  console.log('监听端口')
})