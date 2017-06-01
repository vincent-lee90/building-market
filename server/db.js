var mysql=require('mysql');
var db={};
db.query=function sqlback(sqllan,fn,errorFn) {
  var connection=mysql.createConnection({
    host:'119.23.42.129',
    user:'root',
    password:'MyNewPass4!',
    database:'building',
    port:'3306'
  });
  connection.connect(function (err) {
    if(err){
      console.log(err);
      errorFn(err);
    }
  });
  connection.query(sqllan,function (err,rows,fields) {
    if(err){
      errorFn&&errorFn(err);
      console.log(err);
      return;
    }
    fn(rows);
  });
  connection.end(function (err) {
    if(err){
      console.log('关闭出错');
    }else{
      console.log('链接关闭');
    }
  })
};
module.exports=db;
