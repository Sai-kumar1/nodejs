//  module to serve static html,js  and images 

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors({
    methods:["GET"],
    origin:"http://localhost:3000"
}));
app.get('/static/js/talk.js',cors(),(req,res,next)=>{
        res.sendFile(path.join(__dirname,"/static/js/talk.js"));
        console.log(req.url);
});

app.listen(port);
console.log('listening on port ',port);
