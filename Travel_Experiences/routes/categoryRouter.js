const express = require('express'); 
const router = express.Router();
const categoryController = require('../controller/categoryController');


router.get('/', categoryController.categoryList);
router.post('/add', categoryController.categoryAdd);
router.get('/delete/:id', categoryController.categoryDelete);
router.get('/update/:id', categoryController.categoryEdit);
router.post('/update/:id', categoryController.categoryUpdate);


module.exports = router;


