var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken")
var dbConn = require("../config/db");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
  });

module.exports = router;