var express = require('express');
var router = express.Router();
const pool = require('../database');
const bcrypt = require('bcrypt');


/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.session.uid);
  let data= {
    layout: 'layout.njk'
  }
  res.render('login.njk', data);
});

router.post('/', async (req, res, next) => {
      const username = req.body.name;
      const password = req.body.password;

      await pool.promise()
          .query('select * FROM iscdan_users WHERE name = ?', [username])
          .then(([rows, fields]) => {
            if (rows.length === 0) {
              return res.send('Failed to login');
            }
            console.log(rows[0]);
            bcrypt.compare(password, rows[0].password, function(err,result) {
              console.log(result);
              if (result) {

                  req.session.username = username;
                  req.session.user_id = rows[0].id;
                  console.log(req.session);
                return res.redirect('/noots');
              } else {
              return res.send('Failed to signin');
              }
            });
              
          })
          .catch(err => {
              console.log(err);
              res.status(500).json({
                  task: {
                      error: 'Failed'
                  }
              })
          });
  




});



module.exports = router;