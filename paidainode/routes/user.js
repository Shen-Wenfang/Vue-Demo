var express = require('express');
var router = express.Router();

var mongoCt=require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
    //跨域允许
  res.setHeader('Access-Control-Allow-Origin',req.headers.origin)

  //  console.log('注册',req.query.userName);
  var address='mongodb://127.0.0.1:27017/paidai';
  
  mongoCt.connect(address,function(err,db){   
    if(err){
      console.log('databse error homelist')
    }else{
      var user = db.collection('user');
    //   console.log(req.query);
     //如果前端返回的数据没有email 则获取用户名和密码
      if(req.query.num==1){
        user.find( {"username":req.query.userName}).toArray(function(err,result){
          // console.log(result);
          if(result[0]==undefined){ //如果数据库中没有发现对应的数据 报错
            res.send("用户名不正确")
          }else if(result[0].password!=req.query.passWord){
            res.send("密码不正确");
          }else{
            res.send({msg:"login seccess",data:result});//返回给前端
            // res.send("login seccess");//返回给前端
            // db.close();
          }
        })
      }
      if(req.query.num==0){  
         user.find({"username":req.query.userName}).toArray(function(err,result){
          if(result[0]==undefined){
            user.save({ //如果有email则往数据库中插入数据
              "username":req.query.userName,
              "name":req.query.name,
              "password":req.query.passWord,
              "email":req.query.userEmail
              })
              res.send('reg seccess') //返回给前端，否则前端获取不到
          }else{
            res.send("用户名已经存在，请登录");//返回给前端
          }
        });
      };
    }
  })
});

module.exports = router;
