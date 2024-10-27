
const express=require('express')
const app=express()
const path=require('path')
const mongoose=require('mongoose')
const fs=require('fs')
const bodyparser=require('body-parser')
const port=200

//connect mongoose
mongoose.connect('mongodb://https://127.0.0.1:12707/ContactDAnce',{usenewUrlParser:true,useUnifiedTopology:true})
var db=mongoose.connection;
db.on('err',console.log.bind('Error'))
db.once('open',function(){
    console.log('Connected')
})

//define Mongoose Schema
const ContactSchema=new mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    age:String,
    address:String,
    more:String,
})

//model
const Contact=new mongoose.model('Contact',ContactSchema)

//Document








//static file serving
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//set engine as pug template
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

//end point
app.get('/',(req,res)=>{
    let para={};
    res.status(200).render('index.pug',para)
})
app.get('/home',(req,res)=>{
    let para={};
    res.status(200).render('home.pug',para)
})


app.get('/base',(req,res)=>{
    res.render('base.pug')
})
app.get('/new',(req,res)=>{
    res.render('new.pug')
})
app.get('/contact',(req,res)=>{
    let para={};
    res.status(200).render('contact.pug',para)
})
app.post('/contact',(req,res)=>{
    var Mydata=new Contact(req.body)
    Mydata.save().then(()=>{
        res.send('Item was save to the Database')
    }).catch(()=>{
        res.status(404).send('It was not send')
    })
})

app.post('/',(req,res)=>{
    console.log(req.body)
    name=req.body.name;
    email=req.body.email;
    age=req.body.age;
    address=req.body.address;
    more=req.body.more;
    let output=`The name and email  of the person is ${name},${email}.age is ${age} located at ${address} ,more abour his/her is ${more}`
    /* res.status(200).render('index.pug') */
    fs.writeFileSync('OutPut.txt',output);
    const param={'message':'message sent succussfuly'};
    res.status(200).render('index.pug',param)
})
app.get('/contact',(req,res)=>{

    res.status(200).render('index.pug')
})
app.post('/contact',(req,res)=>{
    console.log(req.body)
    name=req.body.name;
    email=req.body.email;
    age=req.body.age;
    address=req.body.address;
    more=req.body.more;
    let output=`The name and email  of the person is ${name},${email}.age is ${age} located at ${address} ,more abour his/her is ${more}`
    /* res.status(200).render('index.pug') */
    fs.writeFileSync('OutPut.txt',output);
    const param={'message':'message sent succussfuly'};
    res.status(200).render('index.pug',param)
})
//listen
app.listen(port,()=>{
    console.log('Server Started at Port')
})