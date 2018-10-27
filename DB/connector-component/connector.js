const { Pool } = require('pg');
//connect to the DB
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'VK_mail',
    password: 'ciprian',
    port: 5432,
});

module.exports = pool;