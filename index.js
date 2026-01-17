console.clear();
require('dotenv').config({quiet: true});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Hello DevTeam EJS Framework');
})
require('./tools/live_server.js')(app)
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})