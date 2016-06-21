'use strict';

var bodyParser = require('body-parser');
var express = require('express');

/*Create an Express Router, to contain our custom routes.*/
var router = express.Router();

/*Define the route for our homepage.*/
router.get('/', function(req, res) {

	res.render('home', {
    	statusCode: 200,
    });
});

router.get('/about', function(req, res) {

	res.render('about', {
    	statusCode: 200,
    });
});

router.get('/packages', function(req, res) {

	res.render('packages', {
    	statusCode: 200,
    });
});

router.get('/success', function(req, res) {

	res.render('success', {
    	statusCode: 200,
    });
});

router.get('/cancel', function(req, res) {

    res.render('cancel', {
        statusCode: 200,
    });
});

router.get('/legal', function(req, res) {

    res.render('legal', {
        statusCode: 200,
    });
});
module.exports = router;