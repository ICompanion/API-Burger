const authenticateController = function(){ };
const bddController = require('./db');
const jwt = require('jsonwebtoken');
const config = require('../config');
const CookieParser = require('cookie-parser');

authenticateController.signIn = function(values, callback){
  bddController.executeQuery('select name from admin where admin.name = $1 and admin.password = $2;', values, function(data, state){
    data = JSON.parse(data);

    if(data.length === 0)
    {
      state = false;
    } else {
      state = true;
    }
    callback(state);
  });
};

authenticateController.connect = function(req, res, result){
  if (result === false) {
    res.json({ success: false, message: 'Authentication failed. User not found.' }).status(404).end();
  }
  else if (result === true) {
  // if user is found and password is right
  // create a token with only our given payload
  // we don't want to pass in the entire user since that has the password
    const payload = {
    admin: result
    };
    var token = jwt.sign(payload, req.app.get('secret'));
    res.cookie('x-access-token', token,{
        expire: new Date() + 3600000, // expires in 60 min
        httpOnly: false
    })
    .json({
      success: true,
      message: 'Enjoy your token!',
      token: token
      })
      .status(200)
      .end();
  }
};

authenticateController.check = function(req, res, callback){
  if(req.cookies['x-access-token']) {
    var token = req.cookies['x-access-token'];
  } else {
    console.log("Not defined");
  }
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, req.app.get('secret'), function(err, decoded) {
      if (err) {
        console.log(err);
        res.json({ success: false, message: 'Failed to authenticate token.' }).status(400).end();
        callback(false);
      }
      else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        callback(true);
      }
    });
  }
  else {
    // if there is no token
    // return an error
    res.json({
        success: false,
        message: 'No token provided.'
    }).status(403).end();
    return;
  }
};

module.exports = authenticateController;
