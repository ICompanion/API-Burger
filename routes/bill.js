const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const billController = controllers.bill;
const authenticateController = controllers.authenticate;

const billRouter = express.Router();

billRouter.use(bodyParser.json());

/**
 * @api {get} /bill/all Request Bills
 * @apiName getAll
 * @apiGroup Bill
 *
 * @apiSuccess {int} id  Bill id
 * @apiSuccess {double} price Bill price
 * @apiSuccess {String} status Bill status
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *          {
 *              "id": 2,
 *              "price": "7.0",
 *              "status": "awaiting"
 *          }
 *      ]
 *
 * @apiError (Error 404) BillNotFound No bill founded
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 */
billRouter.get('/all', function(req, res){
  billController.getAll(function(data, state){
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
 * @api {get} /bill/:id Request Bill by id
 * @apiName getById
 * @apiGroup Bill
 *
 * @apiParam {int} id Bill id
 *
 * @apiSuccess {int} id  Bill id
 * @apiSuccess {double} price Bill price
 * @apiSuccess {String} status Bill status
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *          {
 *              "id": 2,
 *              "price": "7.0",
 *              "status": "awaiting"
 *          }
 *      ]
 *
 * @apiError (Error 404) BillNotFound No bill founded
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
billRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    billController.getById(req.params.id, function(data, state){
    if(state === false) {res.status(500).end(); return;}

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

/**
 * @api {get} /bill/:id/products Request Bill products by id
 * @apiName getProducts
 * @apiGroup Bill
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
 * @apiSuccess {int} bill_id Bill id
 * @apiSuccess {int} product_id Product id
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *        {
 *          "id": 5,
 *          "name": "Coca-Cola",
 *          "product_type": "Boisson",
 *          "price": "3.5",
 *          "calories": 100,
 *          "veg": false,
 *          "disponibility": true,
 *          "promotion_id": null,
 *          "bill_id": 2,
 *          "product_id": 5
 *        }
 *      ]
 *
 * @apiError (Error 404) MenuNotFound No products for this bill founded
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
billRouter.get('/:id/products', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    billController.getProducts(req.params.id, function(data, state){
    if(state === false) {res.status(500).end(); return;}

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

/**
 * @api {get} /bill/:id/price Request Bill price
 * @apiName getPrice
 * @apiGroup Bill
 *
 * @apiParam {int} id Bill id
 *
 * @apiSuccess {double} price Bill price
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *          {
 *              "price": "7.0"
 *          }
 *      ]
 *
 * @apiError (Error 404) BillNotFound No bill founded
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
billRouter.get('/:id/price', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    billController.getPrice(req.params.id, function(data, state){
    if(state === false) {res.status(500).end(); return;}

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

/**
 * @api {post} /bill/create Create a Bill
 * @apiName create
 * @apiGroup Bill
 *
 * @apiParam {String} status Bill status
 *
 * @apiSuccess {boolean} true Bill created
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
billRouter.post('/create', function(req, res){
  billController.create([req.body.status],
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
 * @api {post} /bill/add/product Add a Product to a Bill
 * @apiName addProduct
 * @apiGroup Bill
 *
 * @apiParam {int} bill_id Bill id
 * @apiParam {int} product_id Product id
 *
 * @apiSuccess {boolean} true Product added
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {post} /bill/add/menu Add a Menu to a Bill
 * @apiName addMenu
 * @apiGroup Bill
 *
 * @apiParam {int} bill_id Bill id
 * @apiParam {int} menu_id Menus id
 *
 * @apiSuccess {boolean} true Menu added
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {post} /bill/:id Modify a Bill by id
 * @apiName update
 * @apiGroup Bill
 *
 * @apiParam {int} id Bill id
 *
 * @apiSuccess {boolean} true Menu added
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

/**
 * @api {delete} /bill/:id Remove Bill by id
 *
 * @apiName deleteById
 * @apiGroup Bill
 *
 * @apiParam {int} id Menu id
 *
 * @apiSuccess {boolean} true Bill deleted
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
