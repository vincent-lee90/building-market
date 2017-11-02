var express = require('express');
var os = require("os");
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('../db.js');
var response = require('../response.js');
var app = express();
var tool = require('../tools/tool.js');
app.use(bodyParser.json());
router.post('/createOrder', function (req, res, next) {
  var order_Code = tool.getOrderCode(), order_name, product_id, product_name, amount, price, user_id, order_status,
    order_status_desc, create_time, store_code, sql;
  product_id = req.body.product_id;
  product_name = req.body.product_name;
  amount = req.body.amount;
  price = req.body.price;
  user_id = req.body.user_id;
  store_code = req.body.store_code;
  order_status = '1';
  order_status_desc = '待支付';
  order_name = product_name + ' x ' + amount;
  create_time = tool.getDateString(new Date());
  sql = 'insert into orders (order_code,order_name,product_id,product_name,amount,price,user_id,order_status,order_status_desc,store_code,create_time) values(\'' + order_Code + '\',\'' + order_name + '\',\'' + product_id + '\',\'' + product_name + '\',\'' + amount + '\',\'' + price + '\',\'' + user_id + '\',\'' + order_status + '\',\'' + order_status_desc + '\',\'' + store_code + '\',\'' + create_time + '\');';
  mysql.query(sql, function (result) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    response.statusCode = '200';
    response.message = 'OK';
    response.body = {
      order_code: order_Code,
      order_name: order_name,
      product_id: product_id,
      product_name: product_name,
      order_status: order_status,
      order_status_desc: order_status_desc,
      amount: amount,
      price: price,
      create_time: create_time
    };
    res.send(response);
  })
});
router.get('/getOrder', function (req, res, next) {
  var order_code, sql;
  order_code = req.query.order_code;
  sql = 'select * from orders where order_code = \'' + order_code + "\';";
  mysql.query(sql, function (result) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    response.statusCode = '200';
    response.message = 'OK';
    response.body = result[0];
    res.send(response);
  }, function (err) {

  })
});
router.get('/getOrders', function (req, res, next) {
  var user_id, order_status, sql;
  user_id = req.query.user_id;
  order_status = req.query.order_status;
  if (order_status !== '0') {
    sql = 'select a.*,b.product_logo,c.store_name from orders as a,product as b,stores as c where a.product_id=b.id and a.store_code=c.store_code and a.user_id= \'' + user_id + '\' and a.order_status=\'' + order_status + '\';';
  } else {
    sql = 'select a.*,b.product_logo,c.store_name from orders as a,product as b,stores as c where a.product_id=b.id and a.store_code=c.store_code and a.user_id = \'' + user_id + '\';'
  }
  mysql.query(sql, function (result) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    response.statusCode = '200';
    response.message = 'OK';
    response.body = result;
    res.send(response);
  }, function (err) {
    response.statusCode = '500';
    response.message = '服务器出错了';
    response.body = err;
    res.send(response);
  })
});
module.exports = router;
