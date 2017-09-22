var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var response = require('../response.js');
var app = express();
var tool = require('../tools/tool.js');
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
app.use(bodyParser.json());
router.post('/', function (req, res, next) {
  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({uploadDir: '/home/static/imgs'});
  form.parse(req, function (err, fields, files) {
    if (err) {
      response.statusCode = 500;
      response.message = err;
      res.send(response);
    } else {
      var inputFile, uploadedPath, header, fileType;
      inputFile = files.image[0];
      uploadedPath = inputFile.path.replace(/\\/g,"\/");
      header = inputFile.headers['content-type'];
      fileType = header.split('/')[1];
      //重命名为真实文件名
      fs.rename(uploadedPath, uploadedPath + '.' + fileType, function (err) {
        if (err) {
          response.statusCode = 500;
          response.message = err;
          console.log('rename error: ' + err);
        } else {
          response.statusCode=200;
          response.message='ok';
          response.body=uploadedPath + '.' + fileType;
          console.log('rename ok');
        }
        res.send(response);
      });
    }
  });
});
module.exports = router;
