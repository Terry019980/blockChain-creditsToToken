var express = require('express');
var router = express.Router();
//var account=require('../models/account');

router.get('/',function (req, res) {
    //console.log("dddd")
    //account.insertAccount('xia','123456');
    res.render('login');
});

//uname为主页变量id
router.post('/',function (req, res) {
    var name=req.body.username;
    var pwd=req.body.password;
    //var data={username:name};
    //document.getElementById("UName").innerHTML=name;
    //将用户名传给区块链
    // var uname=document.getElementById('UName').innerHTML=name;
    //判断用户名和密码是否匹配
    if(name=="xia"&&pwd=="123456"){
        var json = [{"user_name":"xia","time":"16:12:23","credits":160,"amount":110},{"user_name":"shangxiaoyu","time":"14:53:21","credits":170,"amount":100},
            {"user_name":"yulei","time":"13:15:51","credits":180,"amount":90}];

        res.render('index',{json:json});
    }
    else{
        res.render('login');
    }

});
/*业务代码*/


module.exports = router;
