const express = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../utils/auth');

const productRouter = express.Router();

productRouter.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  auth.check(req, res);
  next();
});

productRouter.get('/all', function(res, res){
  res.json('ok');
});

module.exports = productRouter;
