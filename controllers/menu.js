const express = require('express');
const bodyParser = require('body-parser');
const bddController = require('./db');

const menuController = function(){};

menuController.getAll = function(callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from menu', '', function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

menuController.getByName = function(name, callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from menu where name = $1', [name],
                              function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

menuController.getById = function(id, callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from menu where id = $1', [id],
                              function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

menuController.create = function(values, callback){
  bddController.start();
  bddController.executeQuery('insert into menu values($1, $2, $3, $4, $5)',
                               values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

menuController.addProduct = function(values, callback){
  bddController.start();
  bddController.executeQuery('insert into menu_product values($1, $2)',
                               values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

menuController.update = function(columns, values, id, callback) {
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

menuController.removeProduct = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from menu_product where product_id = $2 and menu_id = $1', [values],
                              function(result, state){
      bddController.stop();
      callback(state);
  });
};

menuController.deleteById = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from menu where id = $1', values,
                              function(result, state){
    bddController.executeQuery('delete from menu_product where menu_id = $1', [values],
                                function(result, state){
      bddController.stop();
      callback(state);
    });
  });
};

module.exports = menuController;
