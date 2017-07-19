var express = require('express');
var os = require("os");
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('../db.js');
var response = require('../response.js');
var app = express();
var tool=require('../tools/tool.js');
app.use(bodyParser.json());
router.get('/createOrder', function (req, res, next) {
  mysql.query('insert');
  mysql.query('select search_words from hot_search;', function (result) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    response.statusCode = '200';
    response.message = 'OK';
    response.body = result;
    res.send(response);
  })
});
module.exports = router;
