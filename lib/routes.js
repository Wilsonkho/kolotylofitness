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
module.exports = router;