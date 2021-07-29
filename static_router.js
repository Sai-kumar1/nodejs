//  module to serve static html,js  and images 

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
PORT = process.env.PORT || 4000;

app.use(cors({
    methods:["GET"],
    origin:["http://localhost:3000","https://mysterious-journey-14994.herokuapp.com/"]
}));
app.get('/static/js/talk.js',cors(),(req,res,next)=>{
        res.sendFile(path.join(__dirname,"/static/js/talk.js"));
        console.log(req.url);
});

app.listen(PORT);
console.log('listening on port ',PORT);
