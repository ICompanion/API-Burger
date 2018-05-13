const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const billController = controllers.bill;
const authenticateController = controllers.authenticate;

const billRouter = express.Router();

billRouter.use(bodyParser.json());

billRouter.get('/all', function(req, res){
  billController.getAll(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){

      res.json(data).status(200).end();
      return;
    }

    res.status(404).end();
  });
});

billRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    billController.getById(req.params.id, function(data){
      data = JSON.parse(data);
      if(data.length !== 0){

        res.json(data).status(200).end();
        return;
      }
      res.status(404).end();
    });
    return;
  }
  else {
    res.json("parameter is not an integer").status(500).end();
  }
});


billRouter.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  authenticateController.check(req, res, function(status){
    if(status === false){
      return;

    }
    else {
      next();
    }
  });
});

billRouter.post('/create', function(req, res){
  billController.create([req.body.id, req.body.price, req.body.status],
                            function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});

billRouter.post('/add/product', function(req, res){
  billController.addProduct([req.body.bill_id, req.body.product_id],
                            function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});

billRouter.post('/add/menu', function(req, res){
  billController.addMenu([req.body.bill_id, req.body.menu_id],
                            function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});

billRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    billController.update(columns, values, req.params.id, function(state){
      if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }
    res.status(500).end();
    return;
    });
  }
  else {
    res.json("parameter is not an integer").status(500).end();
  }
});

billRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    billController.deleteById(req.params.id, function(state){
      if(state === true)
      {
        res.json(state).status(200).end();
        return;
      }
      res.status(500).end();
      return;
    });
  }
  else {
    res.json("parameter is not an integer").status(500).end();
  }
});

module.exports = billRouter;
