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


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/nishant', function(req,res){
    res.send("hello n holala holaa")
})

app.listen(3000)