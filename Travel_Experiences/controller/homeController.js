const cityModel = require('../model/cityModel');
const categoryModel = require('../model/categoryModel');
const controller = {};

/**
 * Este método obtiene toda la informmación que necesita para completar la página de inicio.
 * Coge las ciudades usando el modelo de ciudades
 * Coge las categorías usando el modelo de categorías
 */
controller.homeData = (req, res) => {

    // Primero, consulta la lista de ciudades usando el modelo correspondiente
    cityModel.list()
        .then(resultCities => {
            // El then se ejecuta si la consulta ha ido bien    
            // En ese caso, en la variable 'resultCities' tenemos el resultado de la consulta
            // a BBDD

            // Segundo, consulta la lista de categorías usando el modelo correspondiente
            categoryModel.list()
                .then(resultCategories => {
                    // El then se ejecuta si la consulta ha ido bien    
                    // En ese caso, en la variable 'resultCategories' tenemos el resultado de la consulta

                    // Se envía en la respuesta que se renderize la página index, pasando los resultados
                    // de las dos consultas
                    res.render('index', { 
                        cities: resultCities, categories: resultCategories });
                    })
                    .catch((err) => res.send("Error in Home Page Getting categories"));

        })
        .catch((err) => res.send("Error in Home Page Getting cities"));
}


module.exports = controller;

