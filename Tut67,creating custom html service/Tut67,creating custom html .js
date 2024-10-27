 const http=require('http')
const fs=require('fs');
const home=fs.readFileSync('./home.html');
const contact=fs.readFileSync('./contact.html');
const services=fs.readFileSync('./service.html');
const about=fs.readFileSync('./about.html');

const port=3000;
const hostname = '127.0.0.1';

const service=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    //res.end('Hello World')
    if(url=='/'){
      res.end(home)
    }
    else if(url=='/about'){
      res.end(about)
    }
    else if(url=='/contact'){
      res.end(contact)
    }
    else if(url=='/services'){
      res.end(services)
    }
    else{
      res.statusCode=404;
      res.end('<h1>404 not Found</h1>')
    }
    
})

service.listen(port,hostname,()=>{
    console.log(`Server Starting at http://${hostname}:${port}`)
})








/* const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */