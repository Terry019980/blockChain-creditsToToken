var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var json = [{"user_name":"xia","time":"16:12:23","credits":160,"amount":110},{"user_name":"shangxiaoyu","time":"14:53:21","credits":170,"amount":100},
            {"user_name":"yulei","time":"13:15:51","credits":180,"amount":90}];

  res.render('index',{json:json});//,jsonTest);
});

function getTokenRate(){
  //获取token汇率的函数
  var Trate = "";
  document.getElementById("TokenRate").innerHTML = Trate;
}

function getGRate(){
    //获取积分汇率的函数
    var Grate = "";
    document.getElementById("TokenRate").innerHTML = Grate;
}
function getAccountName(){
    //这里要有一个默认的参数要求在登录之后调用
    //调用函数获得用户名
    var AccountName = "";
    document.getElementById("UName").innerHTML = AccountName;
}
module.exports = router;