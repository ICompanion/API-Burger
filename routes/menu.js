const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const menuController = controllers.menu;
const authenticateController = controllers.authenticate;

const menuRouter = express.Router();

menuRouter.use(bodyParser.json());

menuRouter.get('/all', function(req, res){
  menuController.getAll(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){

      res.json(data).status(200).end();
      return;
    }

    res.status(404).end();
  });
});

menuRouter.get('/name/:name', function(req, res){
  menuController.getByName(req.params.name, function(data){
    data = JSON.parse(data);
    if(data.length !== 0){

      res.json(data).status(200).end();
      return;
    }
    res.status(404).end();
  });
});

menuRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    menuController.getById(req.params.id, function(data){
      data = JSON.parse(data);
      if(data.length !== 0){

        res.json(data).status(200).end();
        return;
      }
      res.status(404).end();
      return;
    });
  }
  else {
    res.json("parameter is not an integer").status(500).end();
  }
});


menuRouter.use(function(req, res, next) {
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

menuRouter.post('/create', function(req, res){
  menuController.create([req.body.name, req.body.price, req.body.active],
                            function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});

menuRouter.post('/add/product', function(req, res){
  menuController.addProduct([req.body.menu_id, req.body.product_id],
                            function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});

menuRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    menuController.update(columns, values, req.params.id, function(state){
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

menuRouter.delete('/:menu_id/remove/product/:product_id', function(req, res){
  if(Number.parseInt(req.params.menu_id) && Number.parseInt(req.params.product_id))
  {
  menuController.removeProduct([req.params.menu_id, req.params.product_id], function(state){
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
    res.json("parameters are not all integers").status(500).end();
  }
});

menuRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    menuController.deleteById(req.params.id, function(state){
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

module.exports = menuRouter;
