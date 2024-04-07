const http = require('http');
const fs = require('fs')
const url = require('url');


const myServer = http.createServer((req, res)=>{

    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt",log, (err, data)=> {
        switch(myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query.name;
                res.end(`Hi! ${username}`);
                break;
            case "/search":
                const search = myUrl.query.searchQuery;
                res.end("Result:"+ search);
                break;
            default:
                res.end("404")
        }
    })
});

myServer.listen(8000,()=>{
    console.log("Server Running...")
});