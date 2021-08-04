const http=require('http');
const app=http.createServer();
const fs=require('fs');
const url=require('url');
const path=require('path');
const mime=require('mime');
app.on('request',(req,res)=>{
    let pathname=url.parse(req.url).pathname;
    pathname=pathname=="/"?"/userManagement.html":pathname;
    let realPath=path.join(__dirname,pathname);
    let type=mime.getType(realPath);
    if (req.url=='/') {
        fs.readFile("userManagement.html",(err,result)=>{
            if (err!==null) {
                res.end('failed');
            }
            else {
                res.writeHead(200,{
                    "content-type":"text/html;chartset=utf8"
                });
                res.end(result);
            }        
        });
    }
    else {
        fs.readFile(realPath,(err,result)=>{
            if (err!==null) {
                res.end('failed');
            }
            else {
                res.writeHead(200,{
                    "content-type":type
                });
                res.end(result);
            } 
    });
}
    
    //res.end("in");
});
app.listen(3000);
console.log("success");