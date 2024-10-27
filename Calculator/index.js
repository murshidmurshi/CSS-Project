display=document.getElementById('display')
buttons=Array.from(document.getElementsByClassName('button'))
messagecontainer=document.getElementById('message')


const append=(message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    
    messageElement.classList.add('message')
    messageElement.classList.add(position)
    messagecontainer.appendChild(messageElement)
    

}
buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        
        switch(e.target.innerText){
            case 'C':
                display.innerText="";
                break;
            case '←':
                if(display.innerText){
                    display.innerText=display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{

                    display.innerText=eval(display.innerText);
                }catch{
                    messagecontainer.style.opacity=1;
                    messagecontainer.style.transition='all 0.9s ease-in-out';
                    append('Please Use Correct Character','right')
                    display.innerText=""

                    }

                break;
            default:
                
                display.innerText +=e.target.innerText;

        }
    })
})