var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken")
var md5 = require('md5');
const mongo = require('mongodb');
require("../config/mongoDb");


/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });

router.get('/travels', (req, res) => {
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);

    try {
        const payload = jwt.verify(token, "mysecret");

        query = global.dbo.collection("travels").find({ userId: payload._id }, {});
        // este userId será el id del usuario que lo tengo que guardar en la 
        //bbdd de Travel
        query.toArray().then(documents => {
            res.send(documents);
            // este document se refiere a un registro de la bbdd que en mongo son document
        });
    } catch (e) {
        res.status(401).send("You don't have permission");
    }

});

// esto es el primer paso del edit coger de la bbdd 
//los datos del viaje con un id concreto

router.get('/travels/:id', (req, res) => {
    const travelsId = req.params.id;
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);

    try {
        const payload = jwt.verify(token, "mysecret");

        query = global.dbo.collection("travels").find({ _id: mongo.ObjectId(travelsId) });

        query.toArray().then(documents => {
            res.send(documents[0]);
        });

    } catch (err) {
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
            ); console.log(token)
            res.send(token);
        } else {
            res.status(401).send("Invalid credentials");
        }
    });
});
//se queda para registrar el usuario desde el inicio
//AQUI SE CREA NUEVO USUARIO QUE SE REGISTRE
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
                    _id: result.insertedId, //el result de mongo trae el id
                    username: newUser.username,
                    admin: newUser.admin ? true : false

                },
                "mysecret",
                {
                    expiresIn: 3600
                }
            ); console.log(token)
            res.send(token);
        });

    } catch (_err) {
        console.log(_err);
        res.status(401).send("an error has occurd");
    }
});
//AQUI CREAMOS NUEVO VIAJE CON LOS DATOS QUE VIENEN EN EL BODY DE CREATETRAVEL.EJS
router.post('/travels', function (req, res) {
    const newtravel = req.body;
    const token = req.headers.authorization.replace("Bearer ", "");


    try {
        const payload = jwt.verify(token, "mysecret");
        global.dbo.collection("travels").insertOne({
            destino: newtravel.destino,
            fechaInicio: newtravel.fechaInicio,
            fechaFin: newtravel.fechaFin,
            descripcion: newtravel.descripcion,
            userId: payload._id
        }, (error, result) => {// tine que tener un callback (sera error y result)
            if (error) throw error;
            res.send("ok");
        });
    } catch (_err) {
        console.log(_err);
        res.status(401).send("an error has occurd");
    }
});



router.put("/travels/:id", (req, res) => {
    const token = req.headers.authorization.replace("Bearer ", "");
    const travelsId = req.params.id;
    const data = req.body;

    try {
        global.dbo.collection("travels").updateOne({ _id: mongo.ObjectId(travelsId) }, {
            $set:
            {
                destino: data.destino,
                fechaInicio: data.fechaInicio,
                fechaFin: data.fechaFin,
                descripcion: data.descripcion
            }
        }, (error, result) => {
            if (error) throw error;
            res.send(result)
        });

    } catch (_err) {
        console.log(_err);
        res.status(401).send(" you don't have permission to edit");
    }
});

router.delete("/travels/:id", (req, res) => {
    const token = req.headers.authorization.replace("Bearer ", "");
    const travelId = req.params.id;

    try {
        const payload = jwt.verify(token, "mysecret");

        global.dbo.collection("travels").removeOne({ _id: mongo.ObjectId(travelId) },
            (error, result) => {
                if (error) throw error;
                res.send("deleted")
            });
    } catch (_err) {
        console.log(_err);
        res.status(401).send(" you don't have permission to delete");
    }


})
module.exports = router;