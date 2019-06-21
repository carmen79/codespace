const mysql = require('mysql');

const dbConn = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'token02'
});

dbConn.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database OK');
});

module.exports = dbConn;