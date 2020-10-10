const http = require('http');

const session = {};

http.createServer((req, res) => {
  
  // 观察cookie
  console.log('cookie', req.headers.cookie);
  const sessionKey = 'sid'

  const cookie = req.headers.cookie


  if(cookie && cookie.indexOf(sessionKey) > -1) {
    // 存在sid
    console.log('come back');
    const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
    const sid = pattern.exec(cookie)[1]

    console.log('sid', sid, session[sid]);

    res.end('back')
  } else {
    // 首次登陆
    // uuid
    const sid = (Math.random()*9999).toFixed()
    res.setHeader('Set-Cookie', `${sessionKey}=${sid}`)
    session[sid] = {
      name: 'randy'
    }

    res.end('hello')
  }

}).listen(3000)