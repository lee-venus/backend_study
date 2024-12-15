const http = require("http");
let count = 0;

const server = http.createServer((req,res)=>{
    log(count);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><h1><title>Hello world !!</h1></title></head>');
    res.write('<body><h1>Hello this is my server !</h1></body>')
    res.write('</html>');
    setTimeout(()=>{
        res.end("Node.js");
    },2000);

});

function log(count){
    console.log((count+=1));
}

server.listen(8000, ()=>console.log("Hello world.js"));
 