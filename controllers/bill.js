const express = require('express');
const bodyParser = require('body-parser');
const bddController = require('./db');

const billController = function(){};

billController.getAll = function(callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from bill', '', function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

billController.getById = function(id, callback){
  var data;
  bddController.start();
  bddController.executeQuery('select * from bill where id = $1', [id],
                              function(result){
    data = result;
    bddController.stop();
    callback(data);
  });
};

billController.create = function(values, callback){
  bddController.start();
  bddController.executeQuery('insert into bill(price, status) values($1, $2)',
                               values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

billController.addProduct = function(values, callback){
  bddController.start();
  bddController.executeQuery('insert into bill_product(bill_id, product_id) values($1, $2)',
                               values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

billController.addMenu = function(values, callback){
  bddController.start();
  bddController.executeQuery('insert into bill_menu(bill_id, menu_id) values($1, $2)',
                               values, function(result, state){
    bddController.stop();
    callback(state);
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

  bddController.start();
  bddController.executeQuery(text, values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

billController.deleteById = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from bill where id = $1', values,
                              function(result, state){
    bddController.executeQuery('delete from bill_product where bill_id = $1', [values],
                                function(result, state){
      bddController.executeQuery('delete from bill_menu where bill_id = $1', [values],
                                  function(result, state){
        bddController.stop();
        callback(state);
      });
    });
  });
};

module.exports = billController;
