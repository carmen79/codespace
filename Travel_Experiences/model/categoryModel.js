
const dbConn = require('../config/db');

// Constula básica para obtener todas las categorias de la tabla 'category' , sin filtros
const SQL_FIND_ALL = "SELECT * FROM category";
const SQL_ADD = "INSERT INTO category set ?";
const SQL_EDIT = "SELECT * FROM category WHERE category_id = ?";
const SQL_UPDATE = "UPDATE  category set ? WHERE category_id = ?";
const SQL_DELETE = "DELETE FROM category WHERE category_id = ?";
const model = {};


model.list = () => {
    return new Promise((resolve, reject) => {
        dbConn.query(
            SQL_FIND_ALL,
            (err, result) => {
                if (err) {
                    console.log("ERROR! Durante la consulta a la tabla category:" + err);
                    reject(err);
                }
                else {
                    console.log("Consulta a la tabla category: OK!");
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
                    console.log("ERROR! Durante la insercción en la tabla category:" + err);
                    reject(err);
                }
                else {
                    console.log("insercción en la tabla category: OK!");
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
                    console.log("ERROR! Durante la modificación en la tabla category:" + err);
                    reject(err);
                }
                else {
                    console.log("Modificación en la tabla category: OK!");
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
                    console.log("ERROR! Durante el borrado en la tabla category:" + err);
                    reject(err);
                }
                else {
                    console.log("el borrado en la tabla category: OK!");
                    resolve(result);
                }
            })
    })
}




module.exports = model;