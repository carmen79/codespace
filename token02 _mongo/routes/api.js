var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken")
var dbConn = require("../config/db");
var md5 = require('md5');
const mongo = require('mongodb');
require("../config/mongoDb");


/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });

router.get('/users', (req, res) => {
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);

    try {
        const payload = jwt.verify(token, "mysecret"); //playload nos dice si es administrador

        let query;
        if (payload.admin) {
            query = global.dbo.collection("users").find({}, { projection: { _id: 0, username: 1, email: 1 } });
            //si es admin, hacemos consulta a mongo, a tabla users, me muestre todo con las restricciones que le digo
            //hay que añadir el projection para que funcione la consulta
        } else {
            query = global.dbo.collection("users").find({}, { projection: { _id: 0, username: 1 } });
            //si no, que me muestre solo el username
        }

        query.toArray().then(documents => {
            res.send(documents);
            // este document se refiere a un registro de la bbdd que en mongo son document
        });
    } catch {
        res.status(401).send("You don't have permission");
    }

});
//en este endpoint tenemos que hacer que cuando pongas en la url un id te muestre
// el nombre del usuario al que pertenece
router.get('/users/:id ?', (req, res)=> {

})



//aqui enviamos el token al servidor


// esto es un endpoint

router.post('/auth', function (req, res) {

    const query = global.dbo.collection("users").find({
        username: req.body.username,
        password: md5(req.body.password)
    });

    query.toArray().then(documents => {
        if (documents.length > 0) {
            var token = jwt.sign(
                {
                    username: documents[0].username,
                    admin: documents[0].admin ? true : false
                },
                "mysecret",
                {
                    expiresIn: 3600
                }
            );
            res.send(token);
        } else {
            res.status(400).send("Invalid credentials");
        }
    });


});

// const data = req.body;
// dbConn.query(`SELECT username,admin FROM users WHERE username = "${data.username}" AND password = MD5("${data.password}")`, (error, rows) => {
//     if (rows.length > 0) {
//         var isAdmin = rows[0].admin ? true : false;
//         var token = jwt.sign({ username: rows[0].username, admin: isAdmin }, "mysecret",
//             { expiresIn: 3600 });
//         res.send(token); // con esto se devuelve un token
//     } else {
//         res.status(400).send("invalid credentials") // cambiar esto y devolver un error
//     }
// });


module.exports = router;