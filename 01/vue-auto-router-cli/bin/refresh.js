const fs = require('fs');
const handlebars = require('handlebars')
const chalk = require('chalk');


module.exports = async () => {
  // 获取页面列表
  const list = fs.readdirSync('./src/views')
    .filter(v => v !== 'Home.vue')
    .map(v => ({
      name: v.replace('.vue', '').toLowerCase(), 
      file: v
    }))



    function complie(meta, filePath, templatePath) {
      if(fs.existsSync(templatePath)) {
        const content = fs.readFileSync(templatePath).toString()
        const result = handlebars.compile(content)(meta)
        fs.watchFileSync(filePath, result)
      }
    }
}