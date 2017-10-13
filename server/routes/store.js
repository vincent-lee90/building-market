var express = require('express');
var os = require("os");
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('../db.js');
var response = require('../response.js');
var app = express();
app.use(bodyParser.json());
router.get('/getStoreInfo', function (req, res, next) {
  var store_code = req.query.storeCode, storeInfo, products;
  var p1 = function () {
    return new Promise(function (resolve, reject) {
      var sql = "select * from stores where store_code=\'" + store_code + "\';";
      mysql.query(sql, function (result) {
        storeInfo = result[0];
        resolve(storeInfo)
      }, function (err) {
        reject(err)
      })
    })
  };
  var p2 = function () {
    return new Promise(function (resolve, reject) {
      var sql = "select * from product where store_code=\'" + store_code + "\';";
      mysql.query(sql, function (result) {
        products = result;
        resolve(products);
      }, function (err) {
        reject(err)
      })
    })
  };
  Promise.all([p1(), p2()]).then(function (data) {
    response.message = "ok";
    response.statusCode = "200";
    storeInfo.products = products;
    response.body = storeInfo;
    res.send(response);
  }, function (err) {
    response.statusCode = '500';
    response.message = '出错了';
    response.body = err;
    res.send(response);
  });
});
router.get('/getStoreInfoByUserId', function (req, res, next) {
  var user_id = req.query.user_id, sql;
  sql = "select * from stores where user_id=\'" + user_id + "\';";
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  mysql.query(sql, function (result) {
    response.message = "ok";
    response.statusCode = "200";
    response.body = result[0];
    res.send(response);
  }, function (err) {
    response.statusCode = '500';
    response.message = '出错了';
    response.body = err;
    res.send(response);
  })
});
module.exports = router;
