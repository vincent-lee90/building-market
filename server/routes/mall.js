var express = require('express');
var os = require("os");
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('../db.js');
var response = require('../response.js');
var app = express();
app.use(bodyParser.json());
router.get('/hotWords', function (req, res, next) {
  mysql.query('select search_words from hot_search;', function (result) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    response.statusCode = '200';
    response.message = 'OK';
    response.body = result;
    res.send(response);
  })
});
router.get('/products', function (req, res, next) {
  var sql = "", catCode = '', searchStr = '';
  if (req.query.catCode || req.query.searchStr) {
    if (req.query.catCode) {
      catCode = req.query.catCode;
      sql = "select * from product where product_cat=\'" + catCode + "\';"
    } else {
      searchStr = req.query.searchStr;
      sql = "select * from product where product_cat=\'" + searchStr + "\';"
    }
  } else {
    sql = "select * from product;"
  }
  mysql.query(sql, function (result) {
    response.statusCode = '200';
    response.message = 'OK';
    response.body = result;
    res.send(response);
  })
});
router.get("/product", function (req, res, next) {
  var id = "", sql = "";
  id = req.query.id;
  sql = "select a.*,b.img_url from product as a,product_imgs as b where a.id=b.product_id and a.id=" + id + ";";
  mysql.query(sql, function (result) {
    response.statusCode = '200';
    response.message = 'OK';
    //switch datas
    var _body = result[0];
    _body.img_urls = [];
    result.forEach(function (e) {
      _body.img_urls.push(e.img_url)
    });
    delete _body.img_url;
    response.body = _body;
    res.send(response);
  })
});
router.get("/categories", function (req, res, next) {
  mysql.query("select * from product_cat;", function (result) {
    response.statusCode = '200';
    response.message = 'OK';
    response.body = result;
    res.send(response);
  })
});

module.exports = router;
