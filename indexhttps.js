const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync("./key.pem"),
    cert: fs.readFileSync("./cert.pem"),
};
https.createServer(options, function(req,res){
    res.end("Hello World!");
})
.listen(8000);
