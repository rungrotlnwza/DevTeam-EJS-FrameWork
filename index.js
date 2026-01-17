console.clear()
require('dotenv').config({quiet: true});
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;
const path = require('path');

// view engine
app.set('view engine', 'ejs');
app.disable('view cache');
app.use(expressLayouts);
app.set('layout', false);
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static('assets'))
require('./tools/live_server')(app);
app.use(require('./routes/router'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});