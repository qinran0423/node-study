


// 同步读取
// const data = fs.readFileSync('./conf.js')

// console.log('data', data)


// 异步读取
// fs.readFile('./conf.js', (err, data) => {
//   if(err) throw err

//   console.log('data:', data.toString())
// })

(async () => {
  const fs = require('fs')
  const {promisify} = require('util')
  const readFile = promisify(fs.readFile)
  const data = await readFile('./conf.js')
  console.log('data', data.toString())
})()

