var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('transfer');
});

function checkOn() {
    var PAddress = document.getElementById("packetAddress").innerText;
    var TTNum = document.getElementById("TTNum").value;
    var transferNum = document.getElementById("transferNum").innerText;
    
    if(transferNum>TTNum)
        alert("您的余额不足，请重新操作");
    else if (!PAddress.matchSQL())
        alert("请输入正确的钱包地址")
    else
    {
        alert("转账成功！");
        TTNum = TTNum - transferNum;
        //调用函数对相应的数值进行改变（在区块链上面）
    }
}

function getTTNum(){
    //这里调用函数返回Token的总量
    var TTNum = "";
    document.getElementById("TTNum").value = TTNum;
}

module.exports = router;