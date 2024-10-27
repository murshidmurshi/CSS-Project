///console.log('HEllo World')
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000; 

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <!DOCTYPE html>
<html lresang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid: Autofit & MinMax</title>
    <style>
        .container{
            display: grid;
            grid-gap: 1rem;
            /* grid-template-columns:2fr 3fr 2fr; */
            grid-template-columns:repeat(auto-fit, minmax(200px,400px));
            /* grid-template-columns:2fr 3fr 2fr; */
        }
        .box{
            border: 2px solid rgb(0, 0, 0);
            background-color: rgb(221, 154, 54);
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">item-1</div>
        <div class="box">item-2</div>
        <div class="box">item-3</div>
        <div class="box">item-4</div>
        <div class="box">item-5</div>
        <div class="box">item-6</div>
        <div class="box">item-7</div>
        <div class="box">item-8</div>
        <div class="box">item-9</div>
        <div class="box">item-10</div>
        <div class="box">item-11</div>
        <div class="box">item-12</div>
    </div>
</body>
</html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});