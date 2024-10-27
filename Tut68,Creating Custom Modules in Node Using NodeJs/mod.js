console.log('This is mode.js')
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}
/* module.exports=average; */
module.exports={
    avg:average,
    name:'Murshid',
    age:'18'
}