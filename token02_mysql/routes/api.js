var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken")
var dbConn = require("../config/db");

/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });

router.get('/users', (req, res) => {
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);

    try {
        const payload = jwt.verify(token, "mysecret");
        if (!payload.admin) {
            dbConn.query(`SELECT username FROM users`, (_error, rows) => {
                res.send(rows);
            });

        } else {
            dbConn.query(`SELECT username,email FROM users`, (_error, rows) => {
                res.send(rows);
            });
        }
    } catch (e) {
        res.status(401).send("you don`t have permission");
    }

});

//aqui enviamos el token al servidor


// esto es un endpoint

router.post('/auth', function (req, res) {
    const data = req.body;

    dbConn.query(`SELECT username,admin FROM users WHERE username = "${data.username}" AND password = MD5("${data.password}")`, (error, rows) => {
        if (rows.length > 0) {
            var isAdmin = rows[0].admin ? true : false;
            var token = jwt.sign({ username: rows[0].username, admin: isAdmin }, "mysecret",
                { expiresIn: 3600 });
            res.send(token); // con esto se devuelve un token
        } else {
            res.status(400).send("invalid credentials") // cambiar esto y devolver un error
        }
    });
});

module.exports = router;