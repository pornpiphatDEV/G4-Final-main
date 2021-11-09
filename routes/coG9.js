var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('convidR9-2');
});





router.get('/covidR9', function(req, res, next) {
  res.render('covidR9',{x:''});
});




module.exports = router;
