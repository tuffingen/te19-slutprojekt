var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data= {
    layout: 'layout.njk'
  }
  res.render('index.njk', data);
});

router.post('/signout', function (req, res, next) {
  req.session.destroy();
  console.log(req.session);
  res.redirect('/');
});

module.exports = router;
