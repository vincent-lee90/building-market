var express = require('express');
var router = express.Router();
var mysql=require('../db.js');
var response=require('../response.js')
;
/* GET users listing. */
router.get('/', function(req, res, next) {
  if(!req.query.userName){
    response.statusCode='500';
    response.message='请输入用户名';
    res.send(response);
    response.body=[];
    return;
  }
  if(!req.query.password){
    response.statusCode='500';
    response.message='请输入密码';
    response.body=[];
    res.send(response);
    return;
  }
  var result=mysql.query('select * from user where name=\''+req.query.userName+'\' and password=\''+req.query.password+'\';',function (result) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    if(result.length===0){
      response.statusCode='500';
      response.message='账号或者密码错误';
      response.body=[];
      res.send(response);
    }else{
      response.statusCode='200';
      response.message='OK';
      response.body=[];
      res.send(response);
    }
  })
});
router.post('/register',function (req,res,next){
  if(!req.query.userName){
    response.statusCode='500';
    response.message='请输入用户名';
    res.send(response);
    response.body=[];
    return;
  }
  if(!req.query.password){
    response.statusCode='500';
    response.message='请输入密码';
    response.body=[];
    res.send(response);
    return;
  }
  var result=mysql.query('insert into user (name,password) values (\''+req.query.userName+'\',\''+req.query.password+'\');',function (result) {
    res.send('ok');
  })
});

module.exports = router;
