var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
let session = require('express-session')
const port = 3300;
/* Routes */
var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
let adminRouter = require('./routes/adminRouter');
//apiSearch
var apiRouter = require('./routes/apiSearch.js');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));


/*session */
app.use(session({ 
  secret: "mySecret",  
  resave: false, 
  saveUninitialized: true,
}));
///linea para usar api
app.use(function(req, res, next) {      // PARA QUE FUNCIONE EL PROYECTO
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/* Vistas renderizadas */

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/productos', productsRouter)
app.use('/admin', adminRouter)
app.use('/api', apiRouter); // APIs


app.listen(port, () => console.log(`💥💥💥💥💥💥💥💥💥💥💥💥💥💥\n💥  Servidor levantado    💥\n💥  en el puerto ${port}     💥\n💥  http://localhost:${port} 💥\n💥💥💥💥💥💥💥💥💥💥💥💥💥💥` ))


// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

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
