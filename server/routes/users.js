var express = require('express');
var router = express.Router();
var mysql=require('../db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var result=mysql.query('select * from user;',function (result) {
    /*res.setHeader('Content-Type', 'application/json;charset=utf-8');*/
    res.send(result);
  })
});

module.exports = router;
