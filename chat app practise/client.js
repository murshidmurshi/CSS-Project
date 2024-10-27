const socket = io('http://localhost:8000')

const form = document.getElementById('send-container')
const messageinp = document.getElementById('messageinp')
const messagecontainer = document.querySelector('.container')

var audio=new Audio('ting.mp3')
const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message
    messageElement.classList.add('message')
    messageElement.classList.add(position)
    messagecontainer.appendChild(messageElement)
    if(position=='left'){
        audio.play()
    }
}
const name = prompt('Enter Your Name');
socket.emit('new-user-joined', name);

socket.on('user-joined',name=>{
    append(`${name} joined the chat`,'right')
})
socket.on('receive',data=>{
    append(`${data.name} :${data.message}`,'left')
})
socket.on('left',name=>{
    append(`${name} left the chat`,'left')
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const message=messageinp.value;
    append(`You:${message}`,'right')
    socket.emit('send',message)
    messageinp.value=""

})