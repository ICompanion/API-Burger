const express = require('express');
const authenticate = express.Router();
const db = require('../db');
const auth = require('../utils/auth');

var query = {
  text: '',
  values: []
};



authenticate.get('/:name/:password', function(req, res){
  db.start();
  var result;
  query.text = 'select * from admin where name = $1 and password = $2';
  query.values = [req.params.name, req.params.password];
  db.executeQuery(query, function(data){
    if(data === undefined)
    {
      result = false;
    }else {
      result = true;
    }

    db.stop();

    auth.connect(req, res, result);
  });
});

authenticate.get('/disconnect', function(req, res){
  res.clearCookie('x-access-token').json("disconnected").status(200).end();
});

module.exports = authenticate;
