const express = require('express');
const router = express.Router();
const pool = require('../../DB/connector-component/connector');

//MW

//Routes
router.get('/', (req, res) => {
    res.send('register works')
});

// check the username availability
router.post('/username-availability', (req, res) => {
    // console.log(req.body);
    const usernameCheck = req.body.username;
    const sender = res;
    const request = async () => {
        await pool.query(`SELECT username from users WHERE username = '${usernameCheck}'` , (err, res) => {
            if(err) {
                console.log(err);
                sender.send(err);
                return;
            } else {
              const data = res.rows[0];
              if(data === undefined) {
                sender.send('valid');
              } else {
                sender.send('invalid');
              }
            };
          });
     }; 
    request();
});

// check the email availability
router.post('/email-availability', (req, res, next) => {
    // console.log(req.body);
    const emailCheck = req.body.username + '@VK.com';
    const sender = res;
    const request = async () => {
        await pool.query(`SELECT email from users WHERE email = '${emailCheck}'` , (err, res) => {
            if(err) {
                console.log(err);
                sender.send(err);
                return;
            } else {
              const data = res.rows[0];
              if(data === undefined) {
                sender.send('valid');
              } else {
                sender.send('invalid');
              }
            };
          });
     }; 
    request();
    next();
});

// register user request
router.post('/register-user', (req, res) => {
    console.log('requested')
    // const userData = req.body;
    // const objKeys = Object.keys(userData);
    // console.log(objKeys)
    // dataIncorrect = false;
    // for(let i = 0; i < objKeys.length; i++) {
    //     if(userData[objKeys[i]].length < 1) {
    //         dataIncorrect = true;
    //     };
    // };
    // if(dataIncorrect) {
    //     res.send('incorrect data form!');
    //     return;
    // }

    // userData.email = userData.email + '@VK.com';
    // console.log(req.body);
     res.send('accesed, add the first name and seond name fields on client');
    // const request = async () => {
    //     const text = 'INSERT INTO users(username, password, email, first_name , second_name, security_question, security_answare) VALUES($1, $2, $3, $4 , $5, $6, $7) RETURNING *'
    //     const values = [userData.username,  userData.password, userData.email, userData.question, userData.asnware]
    //     await pool.query(text, values, (err, res) => {
    //         if(err) {
    //             console.log(err);
    //             sender.send(err);
    //             return;
    //         } else {
    //           const data = res.rows[0];
    //           if(data === undefined) {
    //             sender.send('valid');
    //           } else {
    //             sender.send('invalid');
    //           }
    //         };
    //       });
    //  }; 
    // request();
});

module.exports = router;