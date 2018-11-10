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

module.exports = router;