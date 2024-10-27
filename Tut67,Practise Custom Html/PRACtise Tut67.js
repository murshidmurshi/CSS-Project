const http=require('http');
const fs=require('fs')


const home=fs.readFileSync('./home.html')
const about=fs.readFileSync('./about.html')
const contact=fs.readFileSync('./contact.html')
const services=fs.readFileSync('./service.html')

const port=3000;
const hostname='127.0.0.1'

const server=http.createServer((req,res)=>{
    console.log(req.url);
    let url=req.url;
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html')
    //res.end('hello World')
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
        res.end('<h1>404 Not Found</h1>')
    }
})
server.listen(port,hostname,()=>{
    console.log(`Server Staring at http://${hostname}:${port}`)
})