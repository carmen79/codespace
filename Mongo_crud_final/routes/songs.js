const express = require('express');
const router = express.Router('/cancion/');
const songController = require('../controller/songController');

//establishing endpoints
router.get('/list', songController.list)
router.get('/edit/:id', songController.editForm);
router.get('/add', songController.addForm)


router.post('/add', songController.add)
router.get('/delete/:id', songController.del)

module.exports = router;