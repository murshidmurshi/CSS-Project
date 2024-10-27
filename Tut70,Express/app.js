
const express=require('express');
const app=express();
const path=require('path')
const fs=require('fs')
const port=80;
/* app.get('/',(req,res)=>{
    res.send('This is Home Page')
}) */

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))  //for serving static file
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug')  ///set the template engine as pug
//set path 
app.set('views',path.join(__dirname,'views'))

//END STUFF
app.get('/',(req,res)=>{
    const con='This is Best Pug '
    const param={'title':'PubG is the best Game','content':con}
    res.status(200).render('index.pug',param)
})

app.post('/',(req,res)=>{
    //console.log(req.body)
    name=req.body.name;
    age=req.body.age;
    gender=req.body.gender;
    address=req.body.address;
    more=req.body.more;
    let OutputToText=`The name of the employee is ${name} ,${age} years Old,and he is ${gender},located at ${address},more about is ${more}`
    fs.writeFileSync('output.txt',OutputToText)

    const param={'message':'sent Succussfully'}
    res.status(200).render('index.pug',param)
})




/* app.get('/demo',(req,res)=>{
    res.status(200).render('demo',{title:'hey',message:'Hello Murshid,Thanks for using  pug '})
})
/* app.get('/',(req,res)=>{
    res.status(200).send('This is Home Page')
})
app.get('/about',(req,res)=>{
    res.send('This is about Page ')
})
app.get('/contact',(req,res)=>{
    res.send('This is contact Page')
})
app.post('/contact',(req,res)=>{
    res.send('This is contact Page')
})
app.get('/this',(req,res)=>{
    res.status(404).send('the Page was not Found')
})
 */


//LISTEN
app.listen(port,()=>{
    console.log('express started on port ')
})