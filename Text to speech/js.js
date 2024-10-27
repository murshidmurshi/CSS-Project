
textarea=document.querySelector('textarea');
speechbtn=document.querySelector('button');
voicelist=document.querySelector('select')

let synt=speechSynthesis;
let ispeaking=true;
function voices(){
    for(let voice of synt.getVoices()){
        console.log(voice);
        let option=`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
        voicelist.insertAdjacentHTMl('beforeend',option)
    }

}
synt.addEventListener('voiceschanged',voices)
function textTospeech(text){
    let utternce=new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utternce)//speak the speech
}

speechbtn.addEventListener('click',e=>{
    e.preventDefault()
    if(textarea.value !==""){
        if(!synt.speaking){
            textTospeech(textarea.value)
        }
    }
    if(textarea.value.length>80){
        if(ispeaking){
            synt.resume();
            ispeaking=false;
            speechbtn.innerText="Pause Speech";
        }else{
            synt.pause();
            ispeaking=true;
            speechbtn.innerText="Resume Speech";
        }
    }
    
})