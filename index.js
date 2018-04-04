const express = require('express');
const morgan = require('morgan');
const routerManager = require('./routes');
const config = require('./config');
const CookieParser = require('cookie-parser');

const app = express();
app.set('secret', config.secret);
app.use(CookieParser());

app.use(morgan('dev'));
routerManager.attach(app);

app.listen(8080, function(){
  console.log("Connected on 8080...");
});
