'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var nodemailer = require('nodemailer');
var app = express();

/*Create an Express Router, to contain our custom routes.*/
var router = express.Router();

/*Define the route for our homepage.*/
router.get('/', function(req, res) {

	res.render('home', {
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

<<<<<<< HEAD
/*Contact email form*/
 //app.use('/about', router);
 app.post('/about', function (req, res){
     var transporter = nodemailer.createTransport('SMTP', {
         service: 'Gmail',
         auth: {
             user: 'wh.ka.wei@gmail.com',
             pass: 'hacker23',
         }
     });

     var text = req.body.name; //+ '\n' + req.body.email + '\n' + req.body.phone + '\n' + req.body.message;

     var mailOptions = {
         from: 'wh.ka.wei@gmail.com',
         to: 'who@ualberta.ca',
         subject: 'Kolotylo Client Inquiry',
         text: text
     };

     transporter.sendMail (mailOptions, function(error, info){
         if(error){
             console.log(error);
             //res.redirect('/');
         }
         else{
             console.log('Message sent: ' + info.response);
             res.redirect('/');
         }
     }); 
 });

=======
>>>>>>> ca8307dbdcc166eb682190749e38b29bef6b70d7

module.exports = router;