const express = require('express');
const bodyParser = require('body-parser');
const bddController = require('./db');

const productController = function(){ };

productController.getAll = function(callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from product', '', function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

productController.getByName = function(name, callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from product where name = $1', [name],
                              function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

productController.getById = function(id, callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from product where id = $1', [id],
                              function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

productController.getVegan = function(callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from product where veg = true', '',
                              function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

productController.create = function(values, callback){
  bddController.start();
  bddController.executeQuery('insert into product values($1, $2, $3, $4, $5, $6, $7)',
                               values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

productController.deleteById = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from product where id = $1', [values],
                              function(result, state){
    bddController.stop();
    callback(state);
  });
};

productController.deleteByName = function(values, callback){

  bddController.start();
  bddController.executeQuery('delete from product where name = $1', [values],
                              function(result, state){
    bddController.stop();
    callback(state);
  });
};

productController.update = function(columns, values, id, callback) {
  var text ='update product set ';
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

module.exports = productController;
