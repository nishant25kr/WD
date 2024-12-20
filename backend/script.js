// const fs=require('fs')
// fs.writeFile("hey.txt","hillo how are hoy",function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log("done");    

// });


// fs.appendFile("hey.txt","hillo how are you",function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log("done");    

// });

// fs.rename("hy.txt","Hello.txt",function(err){
//     if (err) {
//         console.log(err);
//     }
//     else
//         console.log("file name changed");
// });


const http=require("http");

const Server=http.createServer(function(req,res){
    res.end("hello world");
});

Server.listen(3000);