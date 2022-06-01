var express = require('express');
var router = express.Router();
const pool = require('../database');


router.get('/', async (req, res, next) => {
    const username = req.session.name;
    if (!username){
        return res.redirect('/');
    }
    await pool.promise()
        .query('SELECT iscdan_noots.*,iscdan_users.name FROM iscdan_noots JOIN iscdan_users ON user_id = iscdan_noots.user_id ORDER BY created_at DESC;')
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
    const user_id = req.session.user_id;

   
    await pool.promise()
        .query('INSERT INTO iscdan_noots (body, user_id) VALUES (?,?)', [noot, user_id])
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

router.get('/:id/delete', async (req, res, next) => {
    const id = req.params.id;
    if (isNaN(req.params.id)) {
        res.status(400).json({
            task: {
                error: 'Bad request'
            }
        });
    }
    await pool.promise()
        .query('DELETE FROM iscdan_noots WHERE id = ?', [id])
        .then((response) => {
            if (response[0].affectedRows === 1) {
                res.redirect('/noots');

            } else {
                res.status(400).redirect('/noots');
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                meeps: {
                    error: 'Error deleting noot'
                }
            })
        });
});


module.exports = router;
