var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var consumeRouter = require('./routes/consume');
var transferRouter = require('./routes/transfer');
var inquireRouter = require('./routes/inquire');
var conversionRouter = require('./routes/conversion');
var testRouter = require('./routes/test321');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');


var ejs = require('ejs');
app.engine('html', ejs.__express);
app.set('view engine', 'html');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/consume', consumeRouter);
app.use('/transfer', transferRouter);
app.use('/inquire',inquireRouter);
app.use('/conversion', conversionRouter);
app.use('/register',registerRouter);
app.use('/index',indexRouter);
app.use('/test321',testRouter);
//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
