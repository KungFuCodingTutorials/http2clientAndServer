// HTTP2 SERVER

// Dependecies
let http2 = require('http2');

// Create the client
let client = http2.connect('http://localhost:3000');

// Create the request
let req = client.request({
    'path' : '/',
})

// Listen for incoming message
let str = '';
req.on('data',function(data){
    str+=data;
});

// When the message end log it out
req.on('end',function(){
    console.log(str);
})

// End the request
req.end();