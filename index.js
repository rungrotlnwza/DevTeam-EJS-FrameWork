console.clear();
require('dotenv').config({quiet: true});
const express = require('express');
const adminRouter = require('./routers/admin.js');
const app = express();
const port = process.env.PORT || 3000;


app.use(adminRouter);

app.get('/',(req,res)=>{
    res.send('Hello DevTeam EJS Framework');
})
require('./tools/live_server.js')(app)
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})