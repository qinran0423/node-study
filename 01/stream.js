const fs = require('fs')

const rs = fs.createReadStream('./randy.jpg');
const ws = fs.createWriteStream('./randy2.jpg')

rs.pipe(ws)