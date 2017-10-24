var express = require('express');
var fs = require('fs')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('public/tl.txt','utf-8',function(e,data){
	res.render('index', { title: data});
	});
})

router.get('/a', function(req, res, next) {
  res.render('tl', { title: 'Express' , data:[1,2,3]});
});

module.exports = router;
