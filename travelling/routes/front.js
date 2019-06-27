var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
    res.render('login');
});
router.get('/newuser', function (req, res, next) {
    res.render('newuser');
});


router.get('/users', function (req, res, next) {
    res.render('users');
});

router.get('/travels', function (req, res, next) {
    res.render('travels');
});

router.get('/createtravel', function (req, res, next) {
    res.render('createtravel');
});
router.get('/users/edit/:id', function (req, res, next){
    res.render('edit');
});

module.exports = router;
