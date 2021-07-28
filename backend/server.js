//  module used to serve client requests 

const express = require('express');
const path = require('path');

const main_dir = "F://LEARNINGS//learn_web//web_app_convo//static"
const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(express.json());

app.get('/favicon.ico',(req,res)=>{
    res.sendFile(path.join(__dirname,"//favicon.ico"));
});

app.get('/',(req,res)=>{
    res.redirect('/login');
});
app.get('/login',(req,res)=>{
    res.sendFile(path.join(main_dir,"//frontend//login.html"));
});

app.post('/login/user',(req,res)=>{
    var data={
         user:req.body.username,
         pwd:req.body.password
    };
    res.send(data);
    res.end();
});
app.listen(port);
console.log("server is listening in port",port)