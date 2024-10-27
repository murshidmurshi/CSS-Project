const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/MurshidTEST',{usenewUrlParser:true,useUnifiedTopology:true})
var db=mongoose.connection;
db.on('err',console.log.bind('Error'))
db.once('open',function(){
    console.log('Connected')
})
//schema
const MurshidTEST=new mongoose.Schema({
    name:String
})

MurshidTEST.methods.speak=function(){
    const greeting='My name is '+this.name;
    console.log(greeting)
}

const Kitten=new mongoose.model('MurshidPractise',MurshidTEST)


const obj=Kitten({name:'Murshid'});
/* console.log(obj.name)
obj.speak(); */

obj.save('MurshidPractise',function(err,k){
    if(err) return console.error(err)
    k.speak();
})
Kitten.find({name:'Murshid'},function(err,k){
    if(err) return console.error(err)
    console.log(k)
})