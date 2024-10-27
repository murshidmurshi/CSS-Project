const fs=require('fs')
let text=fs.readFileSync('file.txt','utf-8');
console.log(text)
text=text.replace('file','document')
console.log(text)
