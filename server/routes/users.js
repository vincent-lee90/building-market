var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('../db.js');
var response = require('../response.js');
var app = express();
app.use(bodyParser.json());
/* GET users listing. */
router.get('/', function (req, res, next) {
  if (!req.query.userName) {
    response.statusCode = '500';
    response.message = '请输入用户名';
    res.send(response);
    response.body = [];
    return;
  }
  if (!req.query.password) {
    response.statusCode = '500';
    response.message = '请输入密码';
    response.body = [];
    res.send(response);
    return;
  }
  mysql.query('select * from user where name=\'' + req.query.userName + '\' and password=\'' + req.query.password + '\';', function (result) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    if (result.length === 0) {
      response.statusCode = '500';
      response.message = '账号或者密码错误';
      response.body = [];
      res.send(response);
    } else {
      response.statusCode = '200';
      response.message = 'OK';
      response.body = [];
      res.send(response);
    }
  })
});
router.post('/register', function (req, res, next) {
  if (!req.body.userName) {
    response.statusCode = '500';
    response.message = '请输入用户名';
    res.send(response);
    response.body = [];
    return;
  }
  if (!req.body.password) {
    response.statusCode = '500';
    response.message = '请输入密码';
    response.body = [];
    res.send(response);
    return;
  }
  mysql.query('select * from user where name=\'' + req.body.userName + '\';', function (result) {
    if(result.length===0){
      mysql.query('insert into user (name,password) values (\'' + req.body.userName + '\',\'' + req.body.password + '\');', function (result) {
        response.statusCode = '200';
        response.message = 'OK';
        response.body = [];
        res.send(response);
      })
    }else{
      response.statusCode = '500';
      response.message = '用户名已存在';
      response.body = [];
      res.send(response);
    }
  });
});

module.exports = router;
