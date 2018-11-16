const express = require('express');
const router = express.Router();
const pool = require('../../DB/connector-component/connector');
const jwt = require('jsonwebtoken');
//MW

//verify token
const verifyToken = (req, res, next) => {
    // get log value
    const bearerHeader =  req.headers['authorization'];
    if(bearerHeader !== undefined) {
       // split at the space
       const bearer = bearerHeader.split(' ');
       // get token from array
       const bearerToken = bearer[1];
       //set the toke
       req.token = bearerToken;
       next();
    } else {
        res.sendStatus(403)
    }
 }


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
                  // send user info
                  jwt.sign({user: data}, 'secretKey',{expiresIn:'30s'}, (err, token) => {
                      if(res.rows[0].username) {
                        const data = res.rows[0];
                        sender.send({user : data, accessKey: token});
                      } else {
                         res.send(false);
                      }
                  });
                }
              });
         };
        request();
    }

});
router.get('/inbox', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretKey', (err, data) => {
    if(err) {
        res.sendStatus(403);
    } else {
        res.send('inbox messages')
    };
  })

});


module.exports = router;