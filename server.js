//  module used to serve client requests 

const express = require('express');
const path = require('path');

PORT = process.env.PORT || 3000;
// const main_dir = "F://LEARNINGS//learn_web//web_app_convo//static"
const app = express();
// const port = 3000;

app.use(
    express.urlencoded({
        extended:true
    })
);
app.use(express.static('static'));

app.use(express.json());
//app.use(express.static('/static'));

app.get('/favicon.ico', (req, res) => {
    res.sendFile("favicon.ico",{root:__dirname});
});
// app.get('/favicon.ico',(req,res)=>{
//     res.sendFile('./img1.jpg');
//     res.end();
// });

app.get('/',(req,res)=>{
    res.redirect('/login');
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/static/frontend/login.html");
});

app.post('/login/user',(req,res)=>{
    var data={
         user:req.body.username,
         pwd:req.body.password
    };
    res.send(data);
    res.end();
});
app.listen(PORT);
console.log("server is listening in port",PORT)