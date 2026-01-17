console.clear();
const express = require('express');

//router
const adminRouter = require('./routers/admin');

const app = express();
const port = 3000;

app.use(adminRouter);

app.get('/',(req,res)=>{
    res.send('Hello DevTeam EJS Framework');
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})