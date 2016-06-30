var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var path = require('path');
var routes = require('./lib/routes');
var nodemailer = require('nodemailer');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

/**
 * Application settings.
 */
app.set('trust proxy',true);
app.set('view engine', 'jade');
// app.set('views', './lib/views');
app.set('views', path.join(__dirname, './lib/views'));
app.locals.siteName = 'Kololyto Fitness';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

/**
 * Route initialization.
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'lib')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'lib/css')));
app.use('/', routes);

/**
 * Route initialization.
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'lib')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'lib/css')));
app.use('/', routes);

/*Contact email form*/

app.get('/about', function(req, res) {

  res.render('about', {
      statusCode: 200,
    });
});


 app.post('/about/send', handleAbout); // handles the route from about page

 function handleAbout(req, res){

     var transporter = nodemailer.createTransport({
         service: 'Gmail',
         auth: {
             user: 'wh.ka.wei@gmail.com',
             pass: 'hacker23',
         }
     });

     var text = req.body.name + '\n' + req.body.email + '\n' + req.body.phone + '\n' + req.body.message;

     var mailOptions = {
         from: 'wh.ka.wei@gmail.com',
         to: 'who@ualbert.ca',
         subject: 'Kolotylo Client Inquiry',
         text: text
     };

     transporter.sendMail (mailOptions, function(error, info){
         if(error){
             console.log(error);
             res.json({yo: 'error'});
         }
         else{
             console.log('Message sent: ' + info.response);
             res.json({yo: 'info.response'});
         }
     }); 
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});