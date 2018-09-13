var express = require('express');
var router = express.Router();
//var db=require('../db/db.js');


router.get('/',function (req, res) {
     //从数据库中获得当前积分数和token数
    var json={};
     res.render('inquire',json);

});

// router.post('/',function (req, res) {
//     var json={"integral":"6","token":"6"};
//     res.send(json);
// });

//显示用户当前的积分数和token数
//var rs;当前积分数
// document.getElementById('currentIntegral').value=6;

//var to;当前token数
//document.getElementById('currentToken').value=6;

//查询用户数据写入表格
// window.onload=function () {
//
//     //rs是从数据库中读取的用户数据
//            var tbody=document.getElementById('table');
//            while (rs.next()) {
//                var trow = getDataRow(rs); //定义一个方法,返回tr数据
//                tbody.appendChild(trow);
//                rs=rs.next();
//            }
//        };
// function getDataRow(h){
//     var row = document.createElement('tr'); //创建行
//     var shopCell = document.createElement('td'); //创建第一列id
//     shopCell.innerHTML = h.shop; //填充数据
//     row.appendChild(shopCell); //加入行  ，下面类似
//     var typeCell = document.createElement('td');//创建第二列name
//     typeCell.innerHTML = h.type;
//     row.appendChild(typeCell);
//     var timeCell = document.createElement('td');//创建第三列job
//     timeCell.innerHTML = h.time;
//     row.appendChild(timeCell);
//     var moneyCell = document.createElement('td');//创建第三列job
//     moneyCell.innerHTML = h.money;
//     row.appendChild(moneyCell);
//     var integralCell = document.createElement('td');//创建第三列job
//     integralCell.innerHTML = h.integral;
//     row.appendChild(integralCell);
// }
//

// router.get('/', function(req, res) {
//    var sql="SELECT * FROM userinfo";
//    db.DBConnection.query(sql,function (err,rs) {
//        if(err){
//            throw err;
//        }
//        //res.render('inquire',{userinfo:rows});
//        else {
//            window.onload=function () {
//                var tbody=document.getElementById('table');
//                while (rs.next()) {
//                    var trow = getDataRow(rs); //定义一个方法,返回tr数据
//                    tbody.appendChild(trow);
//                    rs=rs.next();
//                }
//            }
//
//        }
//    });
// });


module.exports = router;