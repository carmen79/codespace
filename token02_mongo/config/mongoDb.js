//conexion a Mongo
//Aqui no tenemos que decir módule export porque hemos 
//creado una variable global que  podemos usar en todo el sistema

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'mongoangeldb';

MongoClient.connect(
    url,
    {
        userNewUrlParser: true
    },
    function (err, db) {
        if (err) throw err;
        global.dbo = db.db(dbName);
    });