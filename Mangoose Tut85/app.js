
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log('Error')
    }
    else{
        console.log('Connected')
    }
})

const kitty=new mongoose.Schema({
    name:String
})

kitty.methods.speak=function(){
    const greeting='Good Morning '+this.name;
    console.log(greeting)
}
const Kitten=new mongoose.model('MURSHID',kitty);

const obj=new Kitten({name:'Murshid'});
/* console.log(obj.name)
obj.speak() */

obj.save(function(err,k){
    if(err)return console.error(err)
    k.speak()
})

Kitten.find({name:'Murshid'},function(err,d){
    if(err)return console.error(err)
    console.log(d)
})










/* const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017";

mongoose.connect(url).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
}); */