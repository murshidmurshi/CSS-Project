const io=require('socket.io')(8000,{
    cors:{
        origin:['http://127.0.0.1:5500']
    }
})

const users={};

io.on('connection',(socket)=>{
    console.log('Someone connected')
    socket.on('new-user-joined',name=>{
        console.log('NewUser',name)
        users[socket.id]=name
        socket.broadcast.emit('user-joined',name)
    })
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    })
    socket.on('disconnect',message=>{
        socket.broadcast.emit('left',users[socket.id])
        delete users[socket.id];
    })
})