var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Indonesian Intelligence' });
});

/* GET weather page. */
router.get('/weather', function(req, res, next) {
  res.render('weather', { title: 'Weather' });
});

/* GET test page. */
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'test' });
});

/* GET game page. */
router.get('/panjatpinang', function(req, res, next) {
  res.render('panjat_pinang', { title: 'Panjat Pinang' });
});

module.exports = router;
