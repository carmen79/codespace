/**
 * Esta clase es el controlador. El router llama a esta clase para 
 * realizar las operaciones sobre cities que gestiona (GET, POST, DELETE, etc...)
 * 
 * Este controlador llama al modelo y realiza la operación y cuando tiene un 
 * resultado desde el modelo, indica qué vista tiene que mostrar.
 */
const model = require('../model/cityModel');
const controller = {};

// Definimos las operaciones que realiza este controlador.
// Serán invocadas desde el cityRouter

/**
 * Este método invoca al modelo para obtener una lista de ciudades completa
 * y el resultado lo envía como una variable (llamada 'result' que se
 * corresponde con la variable 'cities' en el EJS). Es un array de cities realmente
 * lo que tiene.
 */
controller.cityList = (req, res) => {
    model.list()
        .then(result => {
            res.render('cities', { cities: result });
        })
        .catch((err) => res.send("Error Getting Cities"))
}

controller.cityAdd = (req, res) => {
    model.add(req.body)
        .then(result => {
            res.redirect('/cities');
            //cuando añada se vuelve a cagar la pagina de cities//
        })
        .catch((err) => res.send("Error Add City"))
}

controller.cityEdit = (req, res) => {
    model.edit(req.params.id)
        .then(result => {
            res.render('citiesEdit', {
                data: result[0]
            })
        })
        .catch((err) => res.send("Error en Edit City"))
}

controller.cityUpdate = (req, res) => {
    model.update(req.body, req.params.id)
        .then(result => {
            res.redirect('/cities')
        })
        .catch((err) => res.send("Error en Update City"))
}

controller.cityDelete = (req, res) => {
    model.delete(req.params.id)
        .then(result => {
            res.redirect('/cities');
        })
        .catch((err) => res.send("Error Delete City"))
}



module.exports = controller;

