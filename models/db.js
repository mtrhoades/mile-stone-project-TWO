// CONNECTING TO POSTGRESQL DATABASE

const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    password: '15Ghost15',
    host: 'localhost',
    port: 5432,
    database: 'stocksapp'
});

module.exports = pool;