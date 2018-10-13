const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//libs
//external components
const login = require('./routes/login/login');
const app = express();

const port = 3000;

//MW

//Routes

//Login route
app.use('/login', login);

app.get('/', (req, res) => {
   res.send('welcome to VK mail app!');
});



app.listen(port, () => {
 console.log('app is running on port: ' + port);
});
