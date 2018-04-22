const RouterManager = function() { };

RouterManager.attach = function(app){
  app.use('/admin' , require('./authenticate'))
  app.use('/product', require('./product'))
  app.use('/menu', require('./menu')),
  app.use('/bill', require('./bill'))
};

module.exports = RouterManager;
