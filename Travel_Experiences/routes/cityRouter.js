/**
 * Este fichero es el enrutador de las peticiones
 * En app.js está configurado como router para todas las peticiones 
 * que sean del tipo
 * 
 * /cities
 * 
 * Asi que todas las peticiones HTTP que lleguen desde el navegador web hasta app.js
 * y que contengan la ruta '/cities' las redirige a este router
 */
const express = require('express'); 
const router = express.Router();
const cityController = require('../controller/cityController');

router.get('/', cityController.cityList);
router.post('/add', cityController.cityAdd);
router.get('/delete/:id', cityController.cityDelete);
router.get('/update/:id', cityController.cityEdit);
router.post('/update/:id', cityController.cityUpdate);



module.exports = router;