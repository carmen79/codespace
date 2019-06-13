
const express = require('express'); 
const router = express.Router();
const homeController = require('../controller/homeController');

// HTTP Request GET to /index.ejs
router.get('/', homeController.homeData);

module.exports = router;