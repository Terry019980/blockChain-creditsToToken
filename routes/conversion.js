var express = require('express');
var router = express.Router();
//var db=require('../db/db.js');
//var config=require('../db/config.js');

router.get('/',function (req, res) {
    //从数据库中获取用户当前积分数
    var integral=6;
    var chartData=new Array(3);
    var json={integral:integral,Data:chartData};
    res.render('conversion',json);

});

router.post('/',function(req,res){
    var changeIntg=req.body.INum;
    var changeToken=req.body.TNum;
    //将改变的积分和token传递给区块链
})
/*业务代码*/
// var currentIntegral;
// router.get('/',function (req, res) {
//     var sql1="SELECT integral FROM user WHERE user_name='"+config.loginname+"'";
//     db.DBConnection.query(sql1,function (err, rs) {
//         if(err) throw err;
//         document.getElementById('current-integral').value=rs.toString();
//         currentIntegral=rs.toString();
//     //折线图
//         var sql2="SELECT * FROM rate";//rate 表格存储token对人民币的汇率
//         db.DBConnection.query(sql2,function (err, rs) {
//             if(err) throw err;
//             document.getElementsByName(series).data=rs.toArray();
//         });
//     });
//
// });
//
// var currenttoken;
router.post('/', function(req, res) {

   //更新区块链中的积分数和token数
        //从数据库获取当前token数和积分数
    var changeIntegral=req.body.INum;
    var changeToken=req.body.TNum;
    //将当前积分数和token数分别加入上两个变量的值后更新入区块链
    res.render('conversion');
});



module.exports = router;