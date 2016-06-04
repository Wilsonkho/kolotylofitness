'use strict';

var bodyParser = require('body-parser');
var express = require('express');

/*Create an Express Router, to contain our custom routes.*/
var router = express.Router();

/*Define the route for our homepage.*/
router.get('/', function(req, res) {
	if (err) {
		res.json({
            statusCode: 500,
            message: "Failed to retrieve homepage"+ err
        });
	}
	res.render('home', {
    	statusCode: 200,
    });
});

module.exports = router;