/* 
const socket = io();

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageinp');
const messagecontainer = document.querySelector('.container');

const append = (message, position) => {
    const MessageElement = document.createElement('div')
    MessageElement.innerText = message;
    MessageElement.classList.add('message')
    MessageElement.classList.add(position)
    messagecontainer.appendChild(MessageElement)

}

let name=prompt('Enter Your Name');
socket.emit('new-user-joined',name)

socket.on('User-joined', data => {
    append(`${name} joined the Chat`, 'right')
}) */
