body=document.querySelector('body')
button=document.querySelector('button')
let color=['red','green','purple','grey','orange',]
body.style.backgroundColor='red';
button.addEventListener('click',ChangeB)

function ChangeB(){
        const colorIndex=parseInt(Math.random()*color.length)
        body.style.backgroundColor=color[colorIndex];

    }