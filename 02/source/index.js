// const http = require('http')
// const server = http.createServer((req, res) => {
//   res.writeHead(200)
//   res.end('hi randy')
// })

// server.listen(3000, () => {
//   console.log('监听端口3000');
// })


const RAN = require('./ran')
const app = new RAN()

const delay = () => Promise.resolve(resolve => setTimeout(() => resolve(), 2000));


app.use(async (ctx, next) => {
    ctx.body = "1";
    setTimeout(() => {
        ctx.body += "2";
    }, 2000);
    await next();
    ctx.body += "3";
});

app.use(async (ctx, next) => {
    ctx.body += "4";
    await delay();
    await next();
    ctx.body += "5";
});

app.use(async (ctx, next) => {
    ctx.body += "6";
});

app.listen(3000, () => {
  console.log('监听端口3000');
})