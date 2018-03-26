const RouterManager = function() { };

RouterManager.attach = function(app){
  app.use('/' , require('./admin'));
};

module.exports = RouterManager;
