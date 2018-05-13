const express = require('express');
const bodyParser = require('body-parser');
const bddController = require('./db');

const promotionController = function(){};

promotionController.getAll = function(callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from promotion', '', function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

promotionController.getById = function(id, callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from promotion where id = $1', [id],
                              function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

promotionController.create = function(values, callback){
  bddController.start();
  bddController.executeQuery('insert into promotion(reduction, active) values($1, $2)',
                               values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

promotionController.update = function(columns, values, id, callback) {
  var text ='update menu set ';
  var i = 1;

  for(var column of columns)
  {
    text += column + ' = $' + i +', ';
    i++;
  }
  text = text.slice(0,-2) + ' where id = ' + id;

  bddController.start();
  bddController.executeQuery(text, values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

promotionController.deleteById = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from promotion where id = $1', [values],
                              function(result, state){
    bddController.executeQuery("update product set promotion_id = null where promotion_id = $1;", [values],
                                function(result, state){
      bddController.stop();
      callback(state);
    });
  });
};

module.exports = promotionController;
