const express = require('express');
const bodyParser = require('body-parser');
const bddController = require('./db');

const productController = function(){ };

productController.getAll = function(callback){
  var data;
  bddController.executeQuery('select * from product', '', function(result){
    data = result;
    callback(data);
  });
};

productController.getByName = function(name, callback){
  var data;
  bddController.executeQuery('select * from product where name = $1', [name],
                              function(result){
    data = result;
    callback(data);
  });
};

productController.getById = function(id, callback){
  var data;
  bddController.executeQuery('select * from product where id = $1', [id],
                              function(result){
    data = result;
    callback(data);
  });
};

productController.getVegan = function(callback){
  var data;
  bddController.executeQuery('select * from product where veg = true', '',
                              function(result){
    data = result;
    callback(data);
  });
};

productController.create = function(values, callback){
  bddController.executeQuery('insert into product(name, product_type, price, calories, veg, disponibility) values($1, $2, $3, $4, $5, $6)',
                               values, function(result, state){
    callback(state);
  });
};

productController.addPromotion = function(values, callback){
  bddController.executeQuery('update product set promotion_id = $2 where id = $1',
                               values, function(result, state){
    callback(state);
  });
};

productController.deleteById = function(values, callback){
  bddController.executeQuery('delete from product where id = $1', [values],
                              function(result, state){
    callback(state);
  });
};

productController.deleteByName = function(values, callback){
  bddController.executeQuery('delete from product where name = $1', [values],
                              function(result, state){
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

  bddController.executeQuery(text, values, function(result, state){
    callback(state);
  });
};

module.exports = productController;
