/**
 * El modelo es quien se encarga de conectar con la BBDD, en este
 * caso con la tabla 'city'
 * 
 * Aqui usamos la conexion a la BBDD creada en db.js para lanzar la
 * consulta contra la BBDD y obtener los resultados.
 * 
 * Estos métodos son invocados desde el controlador.
 * 
 * Se usa Promise para hacerlo todo de forma asíncrona y no bloquear el servidor
 */
const dbConn = require('../config/db');

// Constula básica para obtener todas las ciudades de la tabla 'city' , sin filtros
const SQL_FIND_ALL = "SELECT * FROM city";

const SQL_ADD = "INSERT INTO city set ?";
const SQL_EDIT = "SELECT * FROM city WHERE city_id = ?";
const SQL_UPDATE = "UPDATE  city set ? WHERE city_id = ?";
const SQL_DELETE = "DELETE FROM city WHERE city_id = ?";
const model = {};

/**
 * Obtiene una lista completa de todas las ciudades en la tabla 'city' de BBDD
 */
model.list = () => {
    return new Promise((resolve, reject) => {
        dbConn.query(
            SQL_FIND_ALL,
            (err, result) => {
                if (err) {
                    console.log("ERROR! Durante la consulta a la tabla city:" + err);
                    reject(err);
                }
                else {
                    console.log("Consulta a la tabla city: OK!");
                    resolve(result);
                }
            })
    })
}

model.add = (add) => {
  
    return new Promise((resolve, reject) => {
        dbConn.query(
            SQL_ADD, [add], (err, result) => {
                
                if (err) {
                    console.log("ERROR! Durante la insercción en la tabla city:" + err);
                    reject(err);
                }
                else {
                    console.log("insercción en la tabla city: OK!");
                    resolve(result);
                }
            })
    })
}

model.edit = (edit) => {
    return new Promise((resolve, reject) => {
        dbConn.query(
            SQL_EDIT, [edit], (err, result) => {
                
                if (err) {
                    console.log("ERROR! :" + err);
                    reject(err);
                }
                else {
                    console.log(" OK!");
                    resolve(result);
                }
            })
    })
}

model.update = (update, id) => {
    return new Promise((resolve, reject) => {
        dbConn.query(
            SQL_UPDATE, [update, id], (err, result) => {
                
                if (err) {
                    console.log("ERROR! Durante la modificación en la tabla city:" + err);
                    reject(err);
                }
                else {
                    console.log("Modificación en la tabla city: OK!");
                    resolve(result);
                }
            })
    })
}

model.delete = (id) => {
    return new Promise((resolve, reject) => {
        dbConn.query(
            SQL_DELETE, [id], (err, result) => {
               
                if (err) {
                    console.log("ERROR! Durante el borrado en la tabla city:" + err);
                    reject(err);
                }
                else {
                    console.log("el borrado en la tabla city: OK!");
                    resolve(result);
                }
            })
    })
}



module.exports = model;