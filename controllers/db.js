const pg = require('pg');
const config = require('../config');
const connection = config.database;
const bddController = function(){ };
var client;

var query = {
text: "",
values: undefined,
}

bddController.start = function(callback){
  client  = new pg.Client(connection);
  client.connect(function(err){
    if(err)
    {
      console.log("Erreur lors de la connection: " +err);
      callback(false);
      return;
    }
    console.log('Connecté à Burger');
    callback(true);
    return;
  });
};


bddController.executeQuery = function(text, values, callback){
    bddController.start(function(state) {
      if(state === false) {callback(undefined, state);console.log(state); return;}
      bddController.makeQuery(text, values);
      client.query(query, function(err, res){
        if(err){
          console.log('Erreur lors de l\'execution de la requête: '+err);
          callback(undefined, state);
          return;
        }

        console.log('Requête executée');
        data = JSON.stringify(res.rows);
        state = true;
        bddController.stop();
        callback(data, state);
      });
    });
};

bddController.stop = function(){
  client.end(function(){
    console.log('Déconnecté de Burger');
  });
};

module.exports = bddController;

bddController.makeQuery = function(text, values){
    query.text = text;
    if(values != '')
    {
      query.values = values;
    }
    else {
      query.values = undefined;
    }

};
