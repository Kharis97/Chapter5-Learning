const http=require('http');
const fs =require('fs');

function css(req,res){
    if(req.url==="/style.css"){
        res.writeHead(200, {"Content-Type":"text/css"});
        const fileContent = fs.readFileSync("./style.css");
        res.write(fileContent);
        res.end();
    }
}

function renderHtml(path,res){
    fs.readFile(path, null,(err,data)=>{
        if(err){
            res.writeHead(404);
            res.write("File not found");
        }
        else{
            res.write(data);
        }
        res.end();
    })
}

const server = http.createServer(function(req,res){
    css(req,res);
    res.writeHead(200, {"Content-Type": "text/html"});
    renderHtml("./index.html", res);
})

server.listen(8000);