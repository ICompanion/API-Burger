const express = require('express');
const authenticate = express.Router();
const controllers = require('../controllers');
const anthenticateController = controllers.authenticate;

/**
 * @api {get} /admin/:name/:password Connect user
 * @apiName connect
 * @apiGroup Authentication
 *
 * @apiSuccess {boolean} success Success of connection
 * @apiSuccess {String} message Connection message
 * @apiSuccess {String} token Generated token
 *
 * @apiSuccessExample Success-Response:
 *    {
 *      "success": true,
 *      "message": "Enjoy your token!",
 *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTI2MzE5NTMyfQ.S2bxQPO1Ku9HBL24G-mjixRPjfu5Dr0zIQca7If3BCQ"
 *    }
 *
 * @apiError (Error 404) UserNotFound No user found for this username
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     "Authentication failed. User not found."
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
authenticate.get('/:name/:password', function(req, res){
  anthenticateController.signIn([req.params.name, req.params.password], function(state){
    anthenticateController.connect(req, res, state);
  });
});

/**
 * @api {get} /admin/disconnect Disconnect user
 * @apiName disconnect
 * @apiGroup Authentication
 *
 * @apiSuccess {boolean} success Success of disconnection
 * @apiSuccessExample Success-Response:
 * "disconnected"
 */
authenticate.get('/disconnect', function(req, res){
  res.clearCookie('x-access-token').json("disconnected").status(200).end();
});

module.exports = authenticate;
