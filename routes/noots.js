var express = require('express');
var router = express.Router();
const pool = require('../database');


router.get('/', async (req, res, next) => {
    const username = req.session.name;
    if (!username){
        return res.redirect('/');
    }
    await pool.promise()
        .query('SELECT * FROM iscdan_noots ORDER BY created_at DESC')
        .then(([rows, fields]) => {
            console.log(rows);
            res.render('noots.njk', {
                noots: rows,
                title: 'noots',
                layout: 'layout.njk'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                meeps: {
                    error: 'Error getting notts'
                }
            })
        });
});

router.post('/', async (req, res, next) => {
    const noot = req.body.noot;

    await pool.promise()
        .query('INSERT INTO iscdan_noots (body) VALUES (?)', [noot])
        .then((response) => {
            console.log(response[0].affectedRows);
            if (response[0].affectedRows === 1) {
                res.redirect('/noots');
            } else {
                res.status(400).json({
                    meeps: {
                        error: 'Invalid noot'
                    }
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                meeps: {
                    error: 'Error posting noot'
                }
            })
        });
}
    // res.json(req.body);

);


module.exports = router;
