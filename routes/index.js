var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data= {
    layout: 'layout.njk'
  }
  res.render('index.njk', data);
});


module.exports = router;
