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
  var order_Code = tool.getOrderCode(),order_name, product_id, product_name, amount, price, user_id, order_status,
    order_status_desc, create_time, sql;
  product_id = req.body.product_id;
  product_name = req.body.product_name;
  amount = req.body.amount;
  price = req.body.price;
  user_id = req.body.user_id || '1';
  order_status = '1';
  order_status_desc = '待支付';
  order_name=product_name+'x'+amount;
  create_time = tool.getDateString(new Date());
  sql = 'insert into orders (order_code,order_name,product_id,product_name,amount,price,user_id,order_status,order_status_desc,create_time) values(\'' + order_Code+'\',\''+order_name + '\',\'' + product_id + '\',\'' + product_name + '\',\'' + amount + '\',\'' + price + '\',\'' + user_id + '\',\'' + order_status + '\',\'' + order_status_desc + '\',\'' + create_time + '\');';
  mysql.query(sql, function (result) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    response.statusCode = '200';
    response.message = 'OK';
    response.body = {
      order_code:order_Code,
      order_name:order_name,
      product_id:product_id,
      product_name:product_name,
      order_status:order_status,
      order_status_desc:order_status_desc,
      amount:amount,
      price:price,
      create_time:create_time
    };
    res.send(response);
  })
});
module.exports = router;
