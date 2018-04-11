const express = require('express');
const authenticate = express.Router();
const controllers = require('../controllers');
const anthenticateController = controllers.authenticate;

authenticate.get('/:name/:password', function(req, res){
  anthenticateController.signIn([req.params.name, req.params.password], function(state){
    anthenticateController.connect(req, res, state);
  });
});

authenticate.get('/disconnect', function(req, res){
  res.clearCookie('x-access-token').json("disconnected").status(200).end();
});

module.exports = authenticate;
