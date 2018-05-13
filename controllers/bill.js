const express = require('express');
const bodyParser = require('body-parser');
const bddController = require('./db');

const billController = function(){};

billController.getAll = function(callback){
  var data;
  bddController.executeQuery('select * from bill', '', function(result){
    data = result;
    callback(data);
  });
};

billController.getById = function(id, callback){
  var data;
  bddController.executeQuery('select * from bill where id = $1', [id],
                              function(result){
    data = result;
    callback(data);
  });
};

billController.getProducts = function(id, callback){
  var data;
  bddController.executeQuery('select * from product, bill_product where product.id = bill_product.product_id and bill_product.bill_id = $1', [id],
                              function(result){
    data = result;
    callback(data);
  });
};

billController.getPrice = function(id, callback){
  var data;
  bddController.executeQuery('select price from bill where id = $1', [id],
                              function(result){
    data = result;
    callback(data);
  });
};

billController.create = function(values, callback){
  bddController.executeQuery('insert into bill(status) values($1)',
                               values, function(result, state){
    callback(state);
  });
};

billController.addProduct = function(values, callback){
  bddController.executeQuery('insert into bill_product(bill_id, product_id) values($1, $2);', values,
                              function(result, state){
    bddController.executeQuery('update bill set price = price + (select product.price from product where id = $2) where id  = $1;', values,
                                function(result, state){
      callback(state);
    });
  });
};

billController.addMenu = function(values, callback){
  bddController.executeQuery('insert into bill_menu(bill_id, menu_id) values($1, $2);', values,
                             function(result, state){
   bddController.executeQuery('update bill set price = price + (select menu.price from menu where id = $2) where id  = $1;', values,
                               function(result, state){
     callback(state);
   });
  });
};

billController.update = function(columns, values, id, callback) {
  var text ='update bill set ';
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

billController.deleteById = function(values, callback){
  bddController.executeQuery('delete from bill where id = $1', values,
                              function(result, state){
    bddController.executeQuery('delete from bill_product where bill_id = $1', [values],
                                function(result, state){
      bddController.executeQuery('delete from bill_menu where bill_id = $1', [values],
                                  function(result, state){
        callback(state);
      });
    });
  });
};

module.exports = billController;
