const express = require('express');
const router = express.Router('/cancion/');
const albumController = require('../controller/albumController');

//We need to require multer here too to parse the router and don't miss the req.body
const multer = require('multer')({
    //Specifying final destination for uploads
    dest: 'public/uploads'
});

//establishing endpoints
router.get('/list', albumController.list);
router.get('/edit/:id', albumController.editForm);
router.get('/add', albumController.addForm);
router.get('/delete/:id', albumController.del);

//We need to specify name of the form file field. In this case 'coverFilename'
router.post('/add', [multer.single('coverFilename')], albumController.add);
router.post('/edit/:id', [multer.single('coverFilename')], albumController.edit);


module.exports = router;