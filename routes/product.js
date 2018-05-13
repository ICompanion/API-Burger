const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const productController = controllers.product;
const authenticateController = controllers.authenticate;
const models = require('../models');
const Product = models.product;
const productRouter = express.Router();

productRouter.use(bodyParser.json());

productRouter.get('/all', function(req, res){
  productController.getAll(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){

      res.json(data).status(200).end();
      return;
    }

    res.status(404).end();
  });
});


productRouter.get('/name/:name', function(req, res){
  productController.getByName(req.params.name, function(data){
    data = JSON.parse(data);
    if(data.length !== 0){

      res.json(data).status(200).end();
      return;
    }
    res.status(404).end();
  });
});


productRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    productController.getById(req.params.id, function(data){
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


productRouter.get('/vegan', function(req, res){
  productController.getVegan(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){

      res.json(data).status(200).end();
      return;
    }

    res.status(404).end();
  });
});

productRouter.use(function(req, res, next) {
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


productRouter.post('/create', function(req, res){
  productController.create([req.body.name, req.body.type, req.body.price,
                            req.body.calories, req.body.veg,
                            req.body.disponibility],
                            function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});

productRouter.post('/:id/promotion/:id_promotion', function(req, res){
  productController.addPromotion([req.params.id, req.params.id_promotion],
                            function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});

productRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    productController.deleteById(req.params.id, function(state){
      if(state === true)
      {
        res.json(state).status(200).end();
        return;
      }

      res.status(500).end();
    });
  }
  else {
    res.json("parameter is not an integer").status(500).end();
  }
});

productRouter.delete('/name/:name', function(req, res){
  productController.deleteByName(req.params.name, function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});

productRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    productController.update(columns, values, req.params.id, function(state){
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

module.exports = productRouter;
