var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  var ss1 = Math.random() *20;
  var ss2 = Math.random() *20;
  var ss3 = Math.random() *20;
  var sj1 = Math.fround(ss1);
  var sj2 = Math.random(ss2);
  var sj3 = Math.round(ss3);
  res.render('computation', { title: 'Sravan Satish Jasti',
  ss1:ss1,
  ss2:ss2,
  ss3:ss3,
  sj1:sj1,
  sj2:sj2,
  sj3:sj3
});
});
module.exports = router;