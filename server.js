// HTTP2 SERVER

// Dependecies
let http2 = require('http2');

// Init the server
let server = http2.createServer();

// On stream send to the client Hello World!
server.on('stream',function(stream,headers){
    stream.respond({
        'status':200,
        'content-type':'text/plain'
    })
    stream.end('Hello World!');
})

// Listen on 3000
server.listen(3000,function(){
    console.log("i'm running on port 3000")
})