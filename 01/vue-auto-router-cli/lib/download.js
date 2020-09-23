const {promisify} = require('util')

module.exports.clone = async function (repo, desc) {
  const dowload = promisify(require('download-git-repo'))
  const ora = require('ora')
  const process = ora(`下载。。。。${repo}`)
  process.start()
  await dowload(repo, desc)
  process.succeed()
}