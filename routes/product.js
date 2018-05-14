const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const productController = controllers.product;
const authenticateController = controllers.authenticate;
const models = require('../models');
const Product = models.product;
const productRouter = express.Router();

productRouter.use(bodyParser.json());

/**
 * @api {get} /product/all Request All Products
 * @apiName getAll
 * @apiGroup Products
 *
 * @apiSuccess {int} id  Unique id of the Product.
 * @apiSuccess {string} name  Name of a Product.
 * @apiSuccess {string} product_type  Type of a Product.
 * @apiSuccess {int} price  Price of a Product.
 * @apiSuccess {boolean} calories  Number of Calories of a Product
 * @apiSuccess {int} veg Is the product vegan.
 * @apiSuccess {int} disponibility  Disponibility of a Product.
 * @apiSuccess {boolean} promotion_id  Unique id of a promotion if there is one.
 *
 * @apiSuccessExample Success-Response:
     {
        "id": 3,
        "name": "Hamburger",
        "product_type": "burger",
        "price": "3",
        "calories": 450,
        "veg": false,
        "disponibility": true,
        "promotion_id": null
    },
    {
        "id": 4,
        "name": "Ice-Tea",
        "product_type": "Boisson",
        "price": "3.5",
        "calories": 100,
        "veg": false,
        "disponibility": true,
        "promotion_id": null
    }
 *
 * @apiError (Error 500) False
 * @apiError  (Error 404) False
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     False
 */
productRouter.get('/all', function(req, res){
  productController.getAll(function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    if(data.length !== 0){

      res.json(data).status(200).end();
      return;
    }

    res.status(404).end();
  });
});

/**
 * @api {get} /product/:name Request a Product by Name
 * @apiName getByName
 * @apiGroup Products
 *
 * @apiParam {string} name Product's name.
 *
 * @apiSuccess {int} id  Unique id of the Product.
 * @apiSuccess {string} name  Name of a Product.
 * @apiSuccess {string} product_type  Type of a Product.
 * @apiSuccess {int} price  Price of a Product.
 * @apiSuccess {boolean} calories  Number of Calories of a Product
 * @apiSuccess {int} veg Is the product vegan.
 * @apiSuccess {int} disponibility  Disponibility of a Product.
 * @apiSuccess {boolean} promotion_id  Unique id of a promotion if there is one.
 *
 * @apiSuccessExample Success-Response:
     {
        "id": 3,
        "name": "Hamburger",
        "product_type": "burger",
        "price": "3",
        "calories": 450,
        "veg": false,
        "disponibility": true,
        "promotion_id": null
    }
 *
 * @apiError (Error 500) False
 * @apiError  (Error 404) False
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     False
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     False
 */
productRouter.get('/name/:name', function(req, res){
  productController.getByName(req.params.name, function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    if(data.length !== 0){

      res.json(data).status(200).end();
      return;
    }
    res.status(404).end();
  });
});

/**
 * @api {get} /product/:id Request a Product by id
 * @apiName getById
 * @apiGroup Products
 *
 * @apiParam {int} id Product id.
 *
 * @apiSuccess {int} id  Unique id of the Product.
 * @apiSuccess {string} name  Name of a Product.
 * @apiSuccess {string} product_type  Type of a Product.
 * @apiSuccess {int} price  Price of a Product.
 * @apiSuccess {boolean} calories  Number of Calories of a Product
 * @apiSuccess {int} veg Is the product vegan.
 * @apiSuccess {int} disponibility  Disponibility of a Product.
 * @apiSuccess {boolean} promotion_id  Unique id of a promotion if there is one.
 *
 * @apiSuccessExample Success-Response:
     {
        "id": 3,
        "name": "Hamburger",
        "product_type": "burger",
        "price": "3",
        "calories": 450,
        "veg": false,
        "disponibility": true,
        "promotion_id": null
    }
 *
 * @apiError (Error 500) False
 * @apiError (Error 500) parameter is not an integer
 * @apiError  (Error 404) False
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     False
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     False
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     "parameter is not an integer"
 */
productRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    productController.getById(req.params.id, function(data, state){
    if(state === false) {res.status(500).end(); return;}
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

/**
 * @api {get} /product/vegan Request Products of vegan type
 * @apiName getVegan
 * @apiGroup Products
 *
 * @apiSuccess {int} id  Unique id of the Product.
 * @apiSuccess {string} name  Name of a Product.
 * @apiSuccess {string} product_type  Type of a Product.
 * @apiSuccess {int} price  Price of a Product.
 * @apiSuccess {boolean} calories  Number of Calories of a Product
 * @apiSuccess {int} veg Is the product vegan.
 * @apiSuccess {int} disponibility  Disponibility of a Product.
 * @apiSuccess {boolean} promotion_id  Unique id of a promotion if there is one.
 *
 * @apiSuccessExample Success-Response:
     {
        "id": 3,
        "name": "Hamburger",
        "product_type": "burger",
        "price": "3",
        "calories": 450,
        "veg": true,
        "disponibility": true,
        "promotion_id": null
    }
 *
 * @apiError  (Error 500) False
 * @apiError  (Error 500) parameter is not an integer
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     False
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     "parameter is not an integer"
 */
productRouter.get('/vegan', function(req, res){
  productController.getVegan(function(data, state){
    if(state === false) {res.status(500).end(); return;}

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

/**
 * @api {post} /product/create Create a product
 * @apiName create
 * @apiGroup Products
 *
 * @apiParam {string} name  Name of a Product.
 * @apiParam {string} product_type  Type of a Product.
 * @apiParam {int} price  Price of a Product.
 * @apiParam {boolean} calories  Number of Calories of a Product
 * @apiParam {int} veg Is the product vegan.
 * @apiParam {int} disponibility  Disponibility of a Product.
 *
 * @apiSuccess true
 *
 * @apiSuccessExample Success-Response:
 *   true
 *
 * @apiError  (Error 500) False
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     False
 */
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

/**
 * @api {post} /product/:id/promotion/:id_promotion Add a promotion to a product
 * @apiName addPromotion
 * @apiGroup Products
 *
 * @apiParam {int} id  id of a Product.
 * @apiParam {int} id_promotion  id of a Promotion.
 *
 * @apiSuccessExample Success-Response:
 *   true
 *
 * @apiError  (Error 500) False
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     False
 */
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

/**
 * @api {delete} /product/:id Delete a product By Id
 * @apiName deleteById
 * @apiGroup Products
 *
 * @apiParam {int} id  id of a Product.
 *
 * @apiSuccess true
 *
 * @apiSuccessExample Success-Response:
 *   true
 *
 * @apiError  (Error 500) False
 * @apiError  (Error 500) parameter is not an integer
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     False
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     "parameter is not an integer"
 */
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

/**
 * @api {delete} /product/:name Delete a product by Name
 * @apiName deleteByName
 * @apiGroup Products
 *
 * @apiParam {string} name  name of a Product.
 *
 * @apiSuccess true
 *
 * @apiSuccessExample Success-Response:
 *   true
 *
 * @apiError  (Error 500) False
 * @apiError  (Error 404) False
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     False
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     False
 */
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

/**
 * @api {put} /product/:id Update a product
 * @apiName update
 * @apiGroup Products
 *
 * @apiParam {int} id  id of a Product.
 * @apiParam {none} variable depend of the user:
 *     He can set the column and the value that he want to update in Product
 *
 * @apiSuccess true
 *
 * @apiSuccessExample Success-Response:
 *   true
 *
 * @apiError  (Error 500) False
 * @apiError  (Error 500) parameter is not an integer
 * @apiError  (Error 404) False
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     False
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     False
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     "parameter is not an integer"
 */
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
