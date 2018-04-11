const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const authenticateController = controllers.authenticate;

const menuRouter = express.Router();

menuRouter.get('/all', function(res, res){
  res.json('ok');
});

menuRouter.get('/:name', function(res, res){
  res.json('ok');
});

menuRouter.get('/:id', function(res, res){
  res.json('ok');
});


menuRouter.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  authenticateController.check(req, res);
  next();
});

menuRouter.post('/create', function(res, res){
  res.json('ok');
});


menuRouter.post('/', function(res, res){
  res.json('ok');
});
module.exports = menuRouter;
