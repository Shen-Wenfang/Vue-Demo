var express = require('express');
var router = express.Router();
router.get('/', function(req, res,next) {
  res.send('我是后台首页')
});

module.exports = router;
