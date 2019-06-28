var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/travels', function (req, res, next) {
    res.render('travels');
});

router.get('/createtravel', function (req, res, next) {
    res.render('createtravel');
});

router.get('/travels/edit/:id', function (req, res, next) {
    res.render('edit');
});
router.get('/users/edit/:id', function (req, res, next) {
    res.render('edit');
});

module.exports = router;
