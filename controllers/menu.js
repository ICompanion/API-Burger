const express = require('express');
const bodyParser = require('body-parser');
const bddController = require('./db');

const menuController = function(){};

menuController.getAll = function(callback){
  var data;
  bddController.executeQuery('select * from menu', '', function(result){
    data = result;
    callback(data);
  });
};

menuController.getByName = function(name, callback){
  var data;
  bddController.executeQuery('select * from menu where name = $1', [name],
                              function(result){
    data = result;
    callback(data);
  });
};

menuController.getById = function(id, callback){
  var data;
  bddController.executeQuery('select * from menu where id = $1', [id],
                              function(result){
    data = result;
    callback(data);
  });
};

menuController.getProducts = function(id, callback){
  var data;
  bddController.executeQuery('select * from product, menu_product where product.id = menu_product.product_id and menu_product.menu_id = $1 ', [id],
                              function(result){
    data = result;
    callback(data);
  });
};

menuController.create = function(values, callback){
  bddController.executeQuery('insert into menu(name, price, active) values($1, $2, $3)',
                               values, function(result, state){
    callback(state);
  });
};

menuController.addPromotion = function(values, callback){
  bddController.executeQuery('update menu set promotion_id = $2 where id = $1',
                               values, function(result, state){
    callback(state);
  });
};

menuController.addProduct = function(values, callback){
  bddController.executeQuery('insert into menu_product(menu_id, product_id) values($1, $2)',
                               values, function(result, state){
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

  bddController.executeQuery(text, values, function(result, state){
    callback(state);
  });
};

menuController.removeProduct = function(values, callback){
  bddController.executeQuery('delete from menu_product where product_id = $2 and menu_id = $1', [values],
                              function(result, state){
      callback(state);
  });
};

menuController.deleteById = function(values, callback){
  bddController.executeQuery('delete from menu where id = $1', values,
                              function(result, state){
    bddController.executeQuery('delete from menu_product where menu_id = $1', [values],
                                function(result, state){
      callback(state);
    });
  });
};

module.exports = menuController;
