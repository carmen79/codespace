
const model = require('../model/categoryModel');
const controller = {};


controller.categoryList = (req, res) => {
    model.list()
        .then(result => {
            res.render('category', { categories: result });
        })
        .catch((err) => res.send("Error Getting Cities")) 
        // aqui en el error podemos decir un res.render con un ejs de errores//
        // en vez de esa frase de error//
}
controller.categoryAdd = (req, res) => {
    model.add(req.body)
        .then(result => {
            res.redirect('/categories');
            //cuando añada se vuelve a cagar la pagina de cities//
        })
        .catch((err) => res.send("Error Add Category"))
}

controller.categoryEdit = (req, res) => {
    model.edit(req.params.id)
        .then(result => {
            res.render('categoryEdit', {
                data: result[0]
            })
        })
        .catch((err) => res.send("Error en Edit category"))
}

controller.categoryUpdate = (req, res) => {
    model.update(req.body, req.params.id)
        .then(result => {
            res.redirect('/categories')
        })
        .catch((err) => res.send("Error en Update Category"))
}

controller.categoryDelete = (req, res) => {
    model.delete(req.params.id)
        .then(result => {
            res.redirect('/categories');
        })
        .catch((err) => res.send("Error Delete Category"))
}


// Falta Implementar el resto de operaciones que necesita el controlador

module.exports = controller;

