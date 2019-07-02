const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


router.get('/travels', (req, res, next) => {
  res.render('travels');
});

router.get('/createtravel', (req, res, next) => {
  res.render('createtravel');
});

router.get('/travels/edit/:id', (req, res, next) => {
  res.render('edit');
});
router.get('/users/edit/:id', (req, res, next) => {
  res.render('edit');
});

module.exports = router;
