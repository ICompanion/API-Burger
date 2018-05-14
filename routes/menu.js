const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const menuController = controllers.menu;
const authenticateController = controllers.authenticate;

const menuRouter = express.Router();

menuRouter.use(bodyParser.json());

 /**
  * @api {get} /menu/all Request Menus
  * @apiName getAll
  * @apiGroup Menu
  *
  * @apiSuccess {int} id  Menu id
  * @apiSuccess {String} name Menu name
  * @apiSuccess {int} price Menu price
  * @apiSuccess {boolean} active Menu is active
  * @apiSuccess {int} promotion_id Menu active promotion id
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *      [
  *        {
  *            "id": 5,
  *            "name": "Classic",
  *            "price": "10",
  *            "active": true,
  *            "promotion_id": null
  *        }
  *    ]
  *
  * @apiError (Error 404) MenuNotFound No menu found
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 404 Not Found
  *     false
  *
  * @apiError (Error 500) Server error.
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 500 Internal server error
  *     false
  */
menuRouter.get('/all', function(req, res){
  menuController.getAll(function(data, state){
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
 * @api {get} /menu/name/:name Request Menu by name
 * @apiName getByName
 * @apiGroup Menu
 *
 * @apiParam {String} name Menu name
 *
 * @apiSuccess {int} id  Menu id
 * @apiSuccess {String} name Menu name
 * @apiSuccess {int} price Menu price
 * @apiSuccess {boolean} active Menu is active
 * @apiSuccess {int} promotion_id Menu active promotion id
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *        {
 *            "id": 5,
 *            "name": "Classic",
 *            "price": "10",
 *            "active": true,
 *            "promotion_id": null
 *        }
 *    ]
 *
 * @apiError (Error 404) MenuNotFound No menu found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false

 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
menuRouter.get('/name/:name', function(req, res){
  menuController.getByName(req.params.name, function(data, state){
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
 * @api {get} /menu/:id Request Menu by id
 * @apiName getById
 * @apiGroup Menu
 *
 * @apiParam {int} id Menu id
 *
 * @apiSuccess {int} id  Menu id
 * @apiSuccess {String} name Menu name
 * @apiSuccess {int} price Menu price
 * @apiSuccess {boolean} active Menu is active
 * @apiSuccess {int} promotion_id Menu active promotion id
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *        {
 *            "id": 5,
 *            "name": "Classic",
 *            "price": "10",
 *            "active": true,
 *            "promotion_id": null
 *        }
 *    ]
 *
 * @apiError (Error 404) MenuNotFound No menu found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false

 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
menuRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    menuController.getById(req.params.id, function(data, state){
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
 * @api {get} /menu/:id/products Request Menu products by id
 * @apiName getProducts
 * @apiGroup Menu
 *
 * @apiParam {int} id Menu id
 *
 * @apiSuccess {int} id  Menu id
 * @apiSuccess {String} name Product name
 * @apiSuccess {String} product_type Product type
 * @apiSuccess {int} price Product price
 * @apiSuccess {int} calories Product calories
 * @apiSuccess {boolean} veg Product is vegetarian
 * @apiSuccess {boolean} disponibility Product is avalaible
 * @apiSuccess {int} promotion_id Menu active promotion id
 * @apiSuccess {int} menu_id Menu id
 * @apiSuccess {int} product_id Product id
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *        {
 *            "id": 2,
 *            "name": "Hamburger",
 *            "product_type": "burger",
 *            "price": "3",
 *            "calories": 450,
 *            "veg": false,
 *            "disponibility": true,
 *            "promotion_id": null,
 *            "menu_id": 5,
 *            "product_id": 3
 *        }
 *      ]
 *
 * @apiError (Error 404) MenuNotFound No products for this menu found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
menuRouter.get('/:id/products', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    menuController.getProducts(req.params.id, function(data, state){
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

/**
 * @api {post} /menu/create Create a Menu
 * @apiName create
 * @apiGroup Menu
 *
 * @apiParam {String} name Menu name
 * @apiParam {int} price Menu price
 * @apiParam {boolean} active Menu is active
 *
 * @apiSuccess {boolean} true  Menu created
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {post} /menu/:id/promotion/:id_promotion Add a Promotion to a Menu
 * @apiName addPromotion
 * @apiGroup Menu
 *
 * @apiParam {int} id Menu id
 * @apiParam {int} id_promotion Promotion id
 *
 * @apiSuccess {boolean} true  Promotion added to Menu
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
menuRouter.post('/:id/promotion/:id_promotion', function(req, res){
  menuController.addPromotion([req.params.id, req.params.id_promotion],
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
 * @api {post} /menu/add/product Add a Product to a Menu
 * @apiName addProduct
 * @apiGroup Menu
 *
 * @apiParam {int} menu_id Menu id
 * @apiParam {int} product_id Product id
 *
 * @apiSuccess {boolean} true Product added
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {put} /menu/:id Modify a Menu by id
 * @apiName update
 * @apiGroup Menu
 *
 * @apiParam {int} id Menu id
 * @apiParam {String} name Menu name
 * @apiParam {int} price Menu price
 * @apiParam {boolean} active Menu is active
 * @apiParam {int} promotion_id Menu active promotion id
 *
 * @apiSuccess {boolean} true  Menu modified
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *c
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {delete} /menu/:menu_id/remove/product/:product_id Remove a Product of a Menu by id
 * @apiName deleteProduct
 * @apiGroup Menu
 *
 * @apiParam {int} menu_id Menu id
 * @apiParam {int} product_id Menu product id
 *
 * @apiSuccess {boolean} true Menu Product deleted
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     "parameters are not all integers"

 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {delete} /menu/:id Remove Menu by id
 *
 * @apiName deleteById
 * @apiGroup Menu
 *
 * @apiParam {int} id Menu id
 *
 * @apiSuccess {boolean} true Menu deleted
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     "parameter is not an integer"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
menuRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    menuController.deleteById([req.params.id], function(state){
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
