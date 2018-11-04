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

router.post('/login-user', (req, res) => {
    const sender = res;
    const data = req.body;
    console.log('user is logging...', data)
    if(data.username.length < 5 || data.password.length < 5 ) {
        sender.send(false)
    }else {
        const request =async () => {
            await pool.query(`SELECT * from users WHERE users.username = '${data.username}' AND users.password = '${data.password}'` , (err, res) => {
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
    }

});

module.exports = router;