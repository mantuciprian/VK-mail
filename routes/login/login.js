const express = require('express');
const router = express.Router();
const pool = require('../../DB/connector-component/connector');

//MW

//Routes
router.get('/', (req, res) => {
    const sender = res;
    const request =async () => {
        await pool.query('SELECT * from users' , (err, res) => {
            if(err) {
                console.log(err);
                sender.send(err);
                return;
            } else {
              const data = res.rows;
              sender.send(data);
            };
          });
     }; 
    request();
});

module.exports = router;