const express=require('express')
const app=express()
const path=require('path')
const port=8000

///serving static File
app.use('/static',express.static('static'))

//pug
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

//end point
app.get('/',(req,res)=>{
    param={}
    res.status(200).render('index.pug',param)
})

app.listen(port,()=>{
    console.log('app.js   is started on port')
})