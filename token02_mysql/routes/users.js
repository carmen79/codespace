var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken")
var dbConn = require("../config/db");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user');
});

router.get('/:id', function (req, res, next){
  const userId = req.params.id;
  res.render ('userId', {id: userId});
})

module.exports = router;
