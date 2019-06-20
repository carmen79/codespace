const express = require('express');
const router = express.Router('/cancion/');
const artistController = require('../controller/artistController');

//establishing endpoints
router.get('/list', artistController.list)
router.get('/edit/:id', artistController.editForm);
router.get('/add', artistController.addForm)

router.post('/add', artistController.add)

module.exports = router;