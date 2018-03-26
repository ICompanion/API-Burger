const express = require('express');
const app = express();
const routerManager = require('./routes');

routerManager.attach(app);

app.listen(8080, function(){
  console.log("Connected on 8080...");
});
