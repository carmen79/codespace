//conexion a Mongo
//Aqui no tenemos que decir módule export porque hemos 
//creado una variable global que  podemos usar en todo el sistema

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'token02';

MongoClient.connect(
    url,
    {
        useNewUrlParser: true
    },
    function (err, db) {
        if (err) throw err;
        global.dbo = db.db(dbName);
    });