//synchronous or Blocking
/* line by line Execution */

//Asynchronous or non-Blocking

/* line by line Execution not guaranteed
callbacks will fire */

const fs= require('fs')

let text=fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(err,data);
});
console.log('HEllo World');
