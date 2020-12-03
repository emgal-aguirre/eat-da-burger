var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
  res.render('index', hbsObject);
});

router.get('/burgers', function (req, res) {
  burger.selectAll(function (burgerData) {
    res.render('index', { burger_data: burgerData });
  });
});

router.post('/burgers/create', function (req, res) {
  burger.create(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect('/');
  });
});

router.put('burgers/:id', function (req, res) {
  burger.update(req.param.id, function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;
