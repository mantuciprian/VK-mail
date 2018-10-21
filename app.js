const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//libs
//external components
const login = require('./routes/login/login');
const register = require('./routes/register/register');

const app = express();

const port = 3000;

//MW

//cors

app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*'); // '*' for all websites or specified eg:'http://localhost:4200'
     
    res.setHeader('Access-Control-Request-Headers', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//get corect body format
app.use(
    bodyParser.raw({ type : 'application/x-www-form-urlencoded' }),
     (req, res, next) => {
      try {
        req.body = JSON.parse(req.body)
      } catch(e) {
        req.body = require('qs').parse(req.body.toString());
      }
      next();
    }
  );


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
//Routes

//Login route
app.use('/login', login);
//register route
app.use('/register', register);
app.get('/', (req, res) => {
   res.send('welcome to VK mail app!');
});




app.listen(port, () => {
 console.log('app is running on port: ' + port);
});
