// const http=require("http")
// const fs=require("fs")
// const url=require("url")

// http.createServer((req,res)=>{

//     switch(req.url){
//         case "/product/ab":
//             fs.readFile("index.html","utf-8" ,(err,data)=>{
//                 console.log("start")
//                 if(err) throw err
//                 console.log("first")
//                 res.writeHead(200,{"content-type":"text/html"})
//                 console.log("second")
//                 res.write(data)
//                 console.log("third")
//                 res.end()
//             })
//             console.log("end")

//             break
//         case "product/ab":
//             fs.readFile("index.html",(err,data)=>{
//                 if(err) throw err
//                 res.writeHead(200,{"content-type":"text/html"})
//                 res.write(data)
//                 res.end()
//             })
//             break
//     }
// }).listen(3005)

// const http=require("http")
// const fs=require("fs")
// const url=require("url")

// const server=http.createServer((req,res)=>{
//     switch(req.url){
//         case "/":
//             fs.readFile("index.html","utf-8",(err,data)=>{
//                 if(err) throw err;
//                 res.write(data)
//             })
//             break
//         default:
//         res.writeHead(404,{'content-type':'text/plain'});
//         res.end("page not fount")
//     }   
// })
// const PORT=3005
// server.listen(PORT,()=>(`server start in ${PORT}`))



var http = require("http");
var fs = require("fs");
var path = require("path");

const PORT = 8080;

http.createServer(function(request, response) {
    if (request.url === "/") {
        fs.readFile("index.html", function(error, html) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        });
    } else if (request.url === "/index.html") {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data);
                response.end();
            }
        });
    } else if (request.url.endsWith(".css")) {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "text/css" });
                response.write(data);
                response.end();
            }
        });
    } else if (request.url.endsWith(".jpg")) {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "image/jpeg" });
                response.write(data);
                response.end();
            }
        });
    }else if (request.url.endsWith(".png")) {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "image/png" });
                response.write(data);
                response.end();
            }
        });
    }
     else if (request.url.endsWith(".webp")) {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "image/webp" });
                response.write(data);
                response.end();
            }
        });
    } else if (request.url.endsWith(".js")) {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "text/javascript" });
                response.write(data);
                response.end();
            }
        });
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("error");
        response.end();
    }
}).listen(PORT);

