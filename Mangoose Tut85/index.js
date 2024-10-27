const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/murshidKart',{useNewUrlparser:true,useUnifiedTopology:true})
var db=mongoose.connection;
db.on('err',console.log.bind(console,'Error'))
db.once('open',function(){
    console.log('Connected...')
})

const kittySchema=new mongoose.Schema({
    name:String
});


kittySchema.methods.speak=function(){
    const greeting='My name is '+this.name;
    console.log(greeting)
}

const Kitten=mongoose.model('Murshidkk',kittySchema);

const obj=new Kitten({name:'Murshid'});
const murshiddd=new Kitten({name:'Murshid2'});
/* console.log(obj.name)
obj.speak(); */

obj.save(function(err,k){
    if(err) return console.error(err)
    k.speak()
})

Kitten.find({name:'Murshid'},function(err,kittens){
    if(err) return console.error(err);
    console.log(kittens)
    
})