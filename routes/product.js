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
    if(data != undefined)
    {
      res.json(data).status(200).end();
      return;
    }

    res.status(404).end();
    return;
  });
});


productRouter.get('/name/:name', function(req, res){
  productController.getByName(req.params.name, function(data){
    if(data != undefined)
    {
      res.json(data).status(200).end();
      return;
    }
    res.status(404).end();
  });
});


productRouter.get('/:id', function(req, res){
  if(Number.isInteger(req.params.id))
  {
    productController.getById(req.params.id, function(data){
      if(data != undefined)
      {
        res.json(data).status(200).end();
        return;
      }

      res.status(404).end();
    });
  }
  res.status(404).end();
});


productRouter.get('/vegan', function(req, res){
  productController.getVegan(function(data){
    if(data != undefined)
    {
      res.json(data).status(200).end();
      return;
    }

    res.status(404).end();
  });
});

productRouter.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  authenticateController.check(req, res);
  next();
});


productRouter.post('/create', function(req, res){
  const product = new Product(req.body.name, req.body.type, req.body.price,
                            req.body.calories, req.body.veg,
                            req.body.disponibility, req.body.promotion);

  productController.create([product.name, product.type, product.price,
                            product.calories, product.veg,
                            product.disponibility, product.promotion],
                            function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});

productRouter.delete('/delete/:id', function(req, res){
  productController.deleteById(req.params.id, function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});

productRouter.delete('/delete/name/:name', function(req, res){
  productController.deleteByName(req.params.name, function(state){
    if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }

    res.status(500).end();
  });
});


module.exports = productRouter;
