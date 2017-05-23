var express = require('express');
var router = express.Router();
var mysql=require('../db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var result=mysql.query('select * from user;',function (result) {
    console.log(result);
  })
});

module.exports = router;
