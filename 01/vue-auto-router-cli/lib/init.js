const { promisify } = require('util')
const figlet = promisify(require('figlet'))

const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content));
const { clone } = require('./download');

const spawn = async (...args) => {
  // log 流对接 子 => 主
  // 封装成promise风格
  const { spawn } = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)

    proc.on('close', () => {
      resolve()
    })
  })
}

module.exports = async name => {
  // 打印欢迎界面
  clear()
  const data = await figlet('Ran Welcome')
  log(data)
  log(`🚀创建项目:` + name)
  await clone('github:qinran0423/vue-template', name)
  log('安装依赖')
  await spawn('npm', ['install'], { cwd: `./${name}` })
  log(`
👌安装完成：
To get Start:
===========================
    cd ${name}
    npm run serve
===========================
            `)
}