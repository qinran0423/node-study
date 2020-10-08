const fs = require('fs')
const path = require('path');
const mongoose = require('mongoose');
const { config } = require('process');
const { schema } = require('../model/user');

function load(dir, cb) {
  const url = path.resolve(__dirname, dir)
  const files = fs.readdirSync(url)
  files.forEach(filename => {
    // 去掉扩展名
    filename = filename.replace('.js', '')

    const file = require(url + '/' + filename)

    cb(filename,file)
  })


}


const loadModel = config => app => {
  mongoose.connect(config.db.url, config.db.option);
  const conn = mongoose.connection

  conn.on('error', () => console.error('数据库连接失败'))
  app.$model = {}
  load('../model', (filename,{schema}) => {
    console.log('load model:' + filename, schema);
    app.$model[filename] = mongoose.model(filename, schema)
  })
}

module.exports = {
  loadModel
}