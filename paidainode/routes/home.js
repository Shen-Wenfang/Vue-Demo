var express = require('express');
var router = express.Router();
var mongoCt = require('mongodb').MongoClient;

router.get('/',function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    var address = 'mongodb://127.0.0.1:27017/paidai';
    mongoCt.connect(address, function (err, db) {
        if (err) {
            console.log('databse error homedata')
        } else {
            var homedata = db.collection('homedata');
            homedata.find({}).limit(4).toArray(function (err, result) {
                res.send(result);//返回给前端
                db.close();
            });
        }
    })
});

module.exports = router;

