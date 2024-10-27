
navbarright=document.querySelector('.navbar-right')
navbarleft=document.querySelector('.navbar-left')
burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')


burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-class-resp')
    navbarright.classList.toggle('v-class-resp')
    navbarleft.classList.toggle('v-class-resp')
})