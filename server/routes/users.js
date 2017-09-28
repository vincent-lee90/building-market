var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('../db.js');
var response = require('../response.js');
var app = express();
app.use(bodyParser.json());
router.get('/login', function (req, res, next) {
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
      response.body = result[0];
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
  mysql.query('insert into user (name,password) values (\'' + req.body.userName + '\',\'' + req.body.password + '\');', function (result) {
    response.statusCode = '200';
    response.message = 'OK';
    response.body = [];
    res.send(response);
  }, function (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      response.message = '用户名已存在';
    } else {
      response.message = err.message;
    }
    response.statusCode = '500';
    response.body = [];
    res.send(response)
  })
});
router.post('/completeInfo', function (req, res, next) {
  var user_id = req.body.user_id,
    real_name = req.body.real_name,
    telephone = req.body.telephone,
    store_name = req.body.store_name,
    store_addr = req.body.store_addr,
    category = req.body.category,
    front_id_card_img_url = req.body.front_id_card_img_url,
    back_id_card_img_url = req.body.back_id_card_img_url;
  if (!user_id) {
    response.statusCode = '500';
    response.message = '请先登录';
    res.send(response);
    response.body = [];
    return;
  }
  if (!real_name) {
    response.statusCode = '500';
    response.message = '请填入真实姓名';
    response.body = [];
    res.send(response);
    return;
  }
  if (!telephone) {
    response.statusCode = '500';
    response.message = '请输入联系电话';
    response.body = [];
    res.send(response);
    return;
  }
  if (!store_name) {
    response.statusCode = '500';
    response.message = '请输入店铺名称';
    response.body = [];
    res.send(response);
    return;
  }
  if (!store_addr) {
    response.statusCode = '500';
    response.message = '请输入店铺地址';
    response.body = [];
    res.send(response);
    return;
  }
  if (!category) {
    response.statusCode = '500';
    response.message = '请选择经营类目';
    response.body = [];
    res.send(response);
    return;
  }
  if (!front_id_card_img_url) {
    response.statusCode = '500';
    response.message = '请上传身份证正面照';
    response.body = [];
    res.send(response);
    return;
  }
  if (!back_id_card_img_url) {
    response.statusCode = '500';
    response.message = '请上传身份证反面照';
    res.send(response);
    response.body = [];
    return;
  }
  var p1 = function () {
    return new Promise(function (resolve, reject) {
      mysql.query('update user set front_id_card_img=\'' + front_id_card_img_url.toString() + '\',back_id_card_img=\'' + back_id_card_img_url.toString() + '\',real_name=\'' + real_name + '\',telephone=\'' + telephone+'\',role=\'merchant\' where id=\'' + user_id + '\';', function (result) {
        resolve('ok');
      }, function (err) {
        reject(err)
      })
    });
  };
  var p2 = function () {
    return new Promise(function (resolve, reject) {
      var sql='insert into stores (store_name,store_address,store_cat,user_id) values (\'' + store_name + '\',\'' + store_addr + '\',\''+category+'\',\'' + user_id + '\');';
      mysql.query(sql, function (result) {
        resolve('ok');
      }, function (err) {
        reject(err);
      })
    })
  };
  Promise.all([p1(),p2()]).then(function (data) {
    response.statusCode = '200';
    response.message = 'OK';
    response.body = [data];
    res.send(response);
  },function (err) {
    response.statusCode = '500';
    response.message = '出错了';
    response.body = err;
    res.send(response);
  })
});
module.exports = router;
