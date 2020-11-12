const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res)=>{
  // console.log(req)
  let urlObj = url.parse(req.url)
  if(urlObj.pathname === '/getWeather'){
    res.end(JSON.stringify({data:'sunny'}))
  }else{
    res.end(fs.readFileSync(__dirname + '/index.html'))
  }
  
}).listen(3030)

console.log('visit http://localhost:3030')