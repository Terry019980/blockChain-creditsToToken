var express = require('express');
var router = express.Router();
//var db=require('../db/db.js');

router.get('/',function (req, res) {
    res.render('register');

});
/*业务代码*/
// function ifrepeat(name) {
//     var sql = "SELECT user_name FROM user WHERE user_name='" + name + "'";
//     db.DBConnection.query(sql, function (err, rs) {
//         if (err)
//             return true;
//         else
//          throw  err;
//     })
// }
router.post('/',function (req, res) {
    var name=req.body.username;
    var pwd=req.body.password;
    //用户名查重
    if(name=="xxx"){
        res.render('register');
    }
    else{
        //将新的用户名及密码存入数据库
        res.render('login');
    }
});


module.exports = router;
