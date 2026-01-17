console.clear()
require('dotenv').config({quiet: true})
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
app.set('view engine','ejs')
app.disable('view cache')
app.use(expressLayouts)
app.set('layout',false)

app.get('/',(req,res)=>{
    res.render(path.join(__dirname,'./view/index.ejs'))
})

require('./tools/live_server.js')(app)
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})