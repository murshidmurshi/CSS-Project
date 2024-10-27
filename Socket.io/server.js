const express=require('express');
const path=require('path')
const app=express();
const server=require('http').createServer(app);
const io=require('socket.io')(server);

app.get('/',function (req,res){
    res.sendFile(
        path.join(__dirname,'index.html')
    )
})
io.on('connection', (socket) => {
  console.log('new connection!');
  socket.on('new-message',msg=>{
    console.log('New Message on the Server',msg)
    io.emit('incoming',msg)
  })
});
server.listen(400,()=>{
    console.log('Started Server')
})