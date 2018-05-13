const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const promotionController = controllers.promotion;
const authenticateController = controllers.authenticate;

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.get('/all', function(req, res){
  promotionController.getAll(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){

      res.json(data).status(200).end();
      return;
    }

    res.status(404).end();
  });
});

promotionRouter.get('/:id', function(req, res){

  if(Number.parseInt(req.params.id))
  {
    promotionController.getById(req.params.id, function(data){
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
