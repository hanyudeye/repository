var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/blog', function (req, res, next) {
  res.render('blog', { title: 'Express' });
});

router.post('/word', function (req, res, next) {
  res.render('word', { title: req.query.title });
  // res.render('word', { title: "主" });
});


router.get('/word', function (req, res, next) {
  console.log(req.query.title)
  // res.redirect("/blog")
  // res.render('word', { title: req.params['title'] });
  res.render('word', { title: req.query.title });
});


module.exports = router;
