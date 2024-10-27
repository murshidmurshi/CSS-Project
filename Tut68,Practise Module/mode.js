console.log('This is mode.js')

function average(arr){
    sum=0;
    arr.forEach(element => {
    sum+=element;
    });
    return sum/arr.length;
}
/* module.exports=average; */
module.exports={
    avg:average,
    name:'Murhsid',
    age:'18'
}


