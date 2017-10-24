var express = require('express');
var fs = require('fs')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	
	var data=fs.readFileSync('public/index.txt','utf-8')
	
	data=data.split(':')
	data=data[1]
	data++
	
	fs.writeFile('public/index.txt',"index访问次数:"+data,'utf-8',function(err){
		res.render('index', { title: 'Express'});
	})
	
	
	
})






router.get('/a', function(req, res, next) {
	
	var data=fs.readFileSync('public/index.txt','utf-8')
	
	data=data.split(':')
	data=data[1]
	data++
	
	fs.writeFile('public/tl.txt',"index访问次数:"+data,'utf-8',function(err){
		 res.render('tl', { title: 'Express' , data:[1,2,3]});
	})
 
});

module.exports = router;
