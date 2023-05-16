const http = require('http');

const data = {email:'jose@test.com',password:'abc@123'};
http.createServer((req,respuesta)=>{
    respuesta.writeHead(200,{'Content-Type': 'application\json'});
    respuesta.write(JSON.stringify(data));
    respuesta.end();
}).listen(4000);