/* 

function updateMap(){
    fetch("/global.json")
    .then(response=>response.json())
    .then((rsp)=>{
        console.log(rsp)
    })
}
updateMap(); */


let mapOption={
    center:[84.0, 150.0],
    zoom:10
}

let map=new L.map('map',mapOption)
let layer=new L.tileLayer('https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png')
map.addLayer(layer)
let marker=new L.marker([84.0, 150.0]);
marker.addTo(map)















