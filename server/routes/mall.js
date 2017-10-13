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
      sql = "select * from product where product_name like \'%" + searchStr + "%\';"
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
router.get('/getProductsByStoreCode', function (req, res, next) {
  var store_code=req.query.store_code,sql;
  sql="select * from product where store_code=\'"+store_code+"\';";
  mysql.query(sql,function (result) {
    response.statusCode = '200';
    response.message = 'OK';
    response.body = result[0];
    res.send(response);
  },function (err) {
    response.statusCode = '500';
    response.message = '系统出错了';
    response.body = err;
    res.send(response);
  })
});
router.get("/product", function (req, res, next) {
  var id = "", sql = "";
  id = req.query.id;
  sql = "select a.*,b.img_url,b.type,c.store_name,c.store_address from product as a,product_imgs as b ,stores as c where a.id=b.product_id and a.store_code=c.store_code and a.id=" + id + ";";
  mysql.query(sql, function (result) {
    response.statusCode = '200';
    response.message = 'OK';
    //switch datas
    var _body = result[0];
    _body.img_logo_urls = [];
    _body.img_detail_urls = [];
    result.forEach(function (e) {
      if (e.type === 'logo') {
        _body.img_logo_urls.push(e.img_url)
      } else {
        _body.img_detail_urls.push(e.img_url);
      }

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
