'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var nodemailer = require('nodemailer');

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

/*Contact email form*/
// app.use('/about', router);
// router.post('/', handleAbout); // handles the route from about page

// function handleAbout(req, res){
//     var transporter = nodemailer.createTransport({
//         service: 'Gmail'
//         auth: {
//             user: 'wh.ka.wei@gmail.com',
//             pass: 'hacker23',
//         }
//     });

//     var text = req.body.name + '\n' + req.body.email + '\n' + req.body.phone + '\n' + req.body.message;

//     var mailOptions = {
//         from: 'wh.ka.wei@gmail.com',
//         to: 'who@ualbert.ca',
//         subject: 'Kolotylo Client Inquiry',
//         text: text
//     };

//     transporter.sendMail (mailOptions, function(error, info){
//         if(error){
//             console.log(error);
//             res.json({yo: 'error'});
//         }
//         else{
//             console.log('Message sent: ' + info.response);
//             res.json({yo: 'info.response'});
//         }
//     }); 
// }

module.exports = router;