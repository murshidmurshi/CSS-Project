//NodeServer which will handle socket io connections
const io=require('socket.io')(8000,{
    cors:{
        origin:['http://127.0.0.1:5501']
    }
})

const users={};
//connecting socket
io.on('connection',socket =>{
    socket.on('new-user-joined',name=>{
        console.log('new-user',name)
        users[socket.id]=name;
        socket.broadcast.emit('User-joined',name);
    });
    //if user send the message,broadcast it to other people 
    socket.on('send',message =>{
        socket.broadcast.emit('receive', { message:message,name:users[socket.id]})
    })
    //if someone leaves the chat ,let other know
    socket.on('disconnect',message =>{
        socket.broadcast.emit('left',users[socket.id])
        delete users[socket.id]
    })
    
})

