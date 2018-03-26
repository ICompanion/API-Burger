const pg = require('pg');
const connection = 'postgresql://lab:Adminpwd@localhost:5000/Burger';
const db = function(){ };
var client;

db.start = function(){
  client  = new pg.Client(connection);
  client.connect(function(err){
    if(err)
    {
      console.log("Erreur lors de la connection: " +err);
      return;
    }
    console.log('Connecté à Burger');
  });
};


db.executeQuery = function(query, callback){
  client.query(query, function(err, res){

    if(err){
      console.log('Erreur lors de l\'execution de la requête: '+err);
      return;
    }

    console.log('Requête executée');
    data = JSON.stringify(res.rows[0]);

    callback(data);
  });
};

db.stop = function(){
  client.end(function(){
    console.log('Déconnecté de Burger');
  });
};


module.exports = db;
