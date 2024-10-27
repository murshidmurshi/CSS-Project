const http=require('http')
const fs=require('fs');
const filecontent=fs.readFileSync('Tut56,DOM.html');

const server=http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(filecontent)
})
server.listen(8000,'127.0.0.1',()=>{
    console.log('Serving the Html http://127.0.0.1')
})