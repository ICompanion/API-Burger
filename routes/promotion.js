const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const promotionController = controllers.promotion;
const authenticateController = controllers.authenticate;

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

/**
 * @api {get} /promotion/all Request All Promotions
 * @apiName getAll
 * @apiGroup Promotions
 *
 * @apiSuccess {int} id of the Product.
 * @apiSuccess {int} reduction  Value of the promotion.
 * @apiSuccess {boolean} active  Status of the promotion.
 * @apiSuccessExample Success-Response:
 *     {
        "id": 1,
        "reduction": 5,
        "active": true
    }
 *
 * @apiError  (Error 500) False
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     False
 */
promotionRouter.get('/all', function(req, res){
  promotionController.getAll(function(data, state){
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
 * @api {get} /promotion/:id Request a Promotion
 * @apiName getById
 * @apiGroup Promotions
 *
 * @apiParam {int} id Promotions unique ID.
 *
 * @apiSuccess {int} id of the Promotions.
 * @apiSuccess {int} reduction  Value of the Promotions.
 * @apiSuccess {boolean} active  Status of the Promotions.
 * @apiSuccessExample Success-Response:
 *     {
        "id": 1,
        "reduction": 5,
        "active": true
    }
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
promotionRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    promotionController.getById(req.params.id, function(data, state){
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


promotionRouter.use(function(req, res, next) {
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
 * @api {post} /promotion/create Create a Promotion
 * @apiName create
 * @apiGroup Promotions
 *
 * @apiParam {int} reduction Value of the Promotions.
 * @apiParam {boolean} active Status of the Promotions.
 *
 * @apiSuccess {boolean} true
 * @apiSuccessExample Success-Response:
 *     true
 *
 * @apiError  (Error 500) False
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     False
 */
promotionRouter.post('/create', function(req, res){
  promotionController.create([req.body.reduction, req.body.active],
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
 * @api {put} /promotion/create Update a Promotion
 * @apiName update
 * @apiGroup Promotions
 *
 * @apiParam {int} id unique id of the Promotion
 * @apiParam {none} variable depend of the user:
 *     He can set the column and the value that he want to update in promotions
 *
 * @apiSuccess {boolean} true
 * @apiSuccessExample Success-Response:
 *     true
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
promotionRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    console.log("ok");
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    promotionController.update(columns, values, req.params.id, function(state){
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
 * @api {delete} /promotion/:id Delete a Promotion
 * @apiName delete
 * @apiGroup Promotions
 *
 * @apiParam {int} id unique id of the Promotion
 *
 * @apiSuccess {boolean} true
 * @apiSuccessExample Success-Response:
 *     true
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
promotionRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    promotionController.deleteById(req.params.id, function(state){
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

module.exports = promotionRouter;
