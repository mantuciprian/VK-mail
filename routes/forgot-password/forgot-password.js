const express = require('express');
const router = express.Router();
const pool = require('../../DB/connector-component/connector');

//MW

//Routes
router.post('/username-check', (req, res) => {
    const sender = res;
    const data = req.body.username;
        const request = async () => {
            await pool.query(`SELECT username from users WHERE users.username = '${data}'` , (err, res) => {
                if(err) {
                    console.log(err);
                    sender.send(err);
                    return;
                } else {
                   const data = res.rows;
                //   sender.send(data);
                   if(data.length > 0 ) {
                     sender.send(true);
                   } else {
                     sender.send(false);
                   }
                };
              });
         };
        request();

});

router.post('/security-check', (req, res) => {
    const sender = res;
    const data = req.body;
    console.log('security check firedd ', data)
        const request = async () => {
            await pool.query(`SELECT username from users WHERE 
            users.username = '${data.username}' AND 
            users.security_question = '${data.question}' AND
            users.security_answare = '${data.answare}'
            ` , (err, res) => {
                if(err) {
                    console.log(err);
                    sender.send(err);
                    return;
                } else {
                   const data = res.rows;
                   console.log(data)
                //   sender.send(data);
                   if(data.length > 0 ) {
                     sender.send(true);
                   } else {
                     sender.send(false);
                   }
                };
              });
         };
        request();

});

router.put('/change-password', (req, res) => {
    const sender = res;
    const data = req.body;
    console.log('chnage pw fired', data)
        const request = async () => {
            await pool.query(`UPDATE users 
            SET password = '${data.password}'
            WHERE users.username = '${data.username}'
            ` , (err, res) => {
                if(err) {
                    console.log(err);
                    sender.send(err);
                    return;
                } else {
                   console.log(res)
                   sender.send(true);
                };
              });
        };
        if(data.password === data.password_repeat && data.username !== undefined) {
            request();
        } else {
            res.send(false)
        }
});

module.exports = router;