const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {
  let urLObj = url.parse(req.url, true)
  switch(urLObj.pathname){
    case '/getWeather':
      if(urLObj.query.city === '北京'){
        res.end(JSON.stringify({city: urLObj.query.city, weather:'晴天'}))
      }else if(urLObj.query.city === '上海'){
        res.end(JSON.stringify({city: urLObj.query.city, weather:'阴天'}))
      }else if(urLObj.query.city === '天津'){
        res.end(JSON.stringify({city: urLObj.query.city, weather:'雨天'}))
      }else{
        res.end(JSON.stringify({city:'unknown', weather:'unknown'}))
      }
      break
    default:
      try{
        let pathname = urLObj.pathname === '/' ? '/index.html':urLObj.pathname
        res.end(fs.readFileSync(__dirname + pathname))
      }catch(e){
        res.writeHead(404, 'Not Found')
        res.end('<h1>404 Not Found~</h1>')
      }
  }
  
}).listen(3030)

console.log('visit http://localhost:3030')