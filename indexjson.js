const http =require('http');

function onRequest(req,res){
    res.writeHead(200,{"Content-Type":"application/json"});
    const data = {
        name: "Sabrina",
        age: 24,
        gender: "Female",
    };
    res.end(JSON.stringify(data));
}

http.createServer(onRequest).listen(8000);