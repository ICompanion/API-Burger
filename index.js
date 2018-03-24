const express = require('express');
const app = express();
const routes = require('./routes');

app.listen(8080, function(){
  console.log("Connected on 8080...");
});


app.use('/', routes);
