
const socket = io('http://localhost:8000');

//DOM event
const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageinp');
const messagecontainer = document.querySelector('.container');

//audio
var audio=new Audio('ding.mp3')

//append function
const append= (message, position) => {
    const MessageElement = document.createElement('div')
    MessageElement.innerText = message;
    MessageElement.classList.add('message')
    MessageElement.classList.add(position)
    messagecontainer.appendChild(MessageElement)
    if(position=='left'){
        audio.play()
    }

}
//ask user name let the server know
let name = prompt('Enter Your Name');
socket.emit('new-user-joined', name)

//if new user joined ,receive name from the server
socket.on('User-joined', name => {
    append(`${name} joined the Chat`, 'right')
})
//if server send the message receive it
socket.on('receive', data => {
    append(`${data.name}:${data.message}`, 'left')
})
//if someone disconnect ,receive a message from server 
socket.on('left', name => {
    append(`${name} left the Chat`, 'left')
})


//if form is submitted, send  message to the server
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageinput.value;
    append(`you:${message}`,'right')
    socket.emit('send',message)
    messageinput.value=''

})