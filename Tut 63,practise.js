const http=require('http')
const hostname='127.0.0.1';
const port=3000;

let server=http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  res.end('Hello');
})

server.listen(port,hostname,()=>{
  console.log(`Server Started at http://${hostname}:${port}/`)
})