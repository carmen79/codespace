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
        if (payload.admin == true) {
            query = global.dbo.collection("users").find({}, { projection: { _id: 1, username: 1, email: 1 } });
            //si es admin, hacemos consulta a mongo, a tabla users, me muestre todo con las restricciones que le digo
            //hay que añadir el projection para que funcione la consulta
        } else {
            query = global.dbo.collection("users").find({}, { projection: { _id: 1, username: 1 } });
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

router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);

    try {
        const payload = jwt.verify(token, "mysecret");

        query = global.dbo.collection("users").find({ _id: mongo.ObjectId(userId) }, { projection: { username: 1, email: 1 } });

        query.toArray().then(documents => {
            res.send(documents[0]);
        });

    } catch (e) {
        res.status(401).send("you don`t have permission");
    }

});

//aqui enviamos el token al servidor


router.post('/auth', function (req, res) {

    const query = global.dbo.collection("users").find({
        username: req.body.username,
        password: md5(req.body.password)
    });

    query.toArray().then(documents => {
        if (documents.length > 0) {
            var token = jwt.sign(
                {
                    _id: documents[0]._id,
                    username: documents[0].username,
                    admin: documents[0].admin ? true : false
                    
                },
                "mysecret",
                {
                    expiresIn: 3600
                }
            ); console.log (token)
            res.send(token);
        } else {
            res.status(400).send("Invalid credentials");
        }
    });
});

router.post('/users', function (req, res) {
  
    const newUser = req.body;

      try {
            global.dbo.collection("users").insertOne({
                username: newUser.username,
                password: md5(newUser.password),
                admin: false,
                email: newUser.email

            }, (error, result) => {// tine que tener un callback (sera error y result)
                if (error) throw error;
                var token = jwt.sign(
                    {
                        username: newUser.username,
                        admin: newUser.admin ? true : false
                        
                    },
                    "mysecret",
                    {
                        expiresIn: 3600
                    }
                ); console.log (token)
                res.send(token);            
            });

    } catch (_err) {
        console.log(_err);
        res.status(401).send("an error has occurd");
    }
});

router.put("/users/:id", (req, res) => {
    const token = req.headers.authorization.replace("Bearer ", "");
    const userId = req.params.id;
    const data = req.body;

    try {
        const payload = jwt.verify(token, "mysecret");
        console.log(payload.admin);
        if (payload.admin) {

            global.dbo.collection("users").updateOne({ _id: mongo.ObjectId(userId) }, {
                $set:
                {
                    username: data.username,
                    password: md5(data.password),
                    admin: data.admin,
                    email: data.email
                }
            }, (error, result) => {
                if (error) throw error;
                res.send(result)
            });
        } else {
            res.status(403).send("Forbidden. You are not an admin.")
        }
    } catch (_err) {
        console.log(_err);
        res.status(401).send(" you don't have permission to edit");
    }
});

router.delete("/users/:id", (req, res) => {
    const token = req.headers.authorization.replace("Bearer ", "");
    const userId = req.params.id;

    try {
        const payload = jwt.verify(token, "mysecret");
        if (payload.admin) {
            global.dbo.collection("users").removeOne({ _id: mongo.ObjectId(userId)},
                (error, result) => {
                    if (error) throw error;
                    res.send("deleted")
                });
        } else {
            res.status(403).send("Forbidden. You are not an admin.")
        }
    } catch (_err) {
        console.log(_err);
        res.status(401).send(" you don't have permission to delete");
    }


})
module.exports = router;