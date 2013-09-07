
/**
 * Module dependencies.
 */

var express = require('express');
var fs = require('fs');
var passport = require('passport');
var routes = require('./config/routes');
var user = require('./config/routes/user');
var http = require('http');
var path = require('path');
var app = express();

// Load configurations
// if test env, load example file
var env = process.env.NODE_ENV || 'development'
    , config = require('./config/config')[env]
    , auth = require('./config/middlewares/authorization')
    , mongoose = require('mongoose')

// Bootstrap db connection
var db = mongoose.connect(config.db)

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));


// Bootstrap models
var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
    require(models_path+'/'+file)
});

// bootstrap passport config
require('./config/passport')(passport, config)

// express settings
require('./config/express')(app, config, passport)

// Bootstrap routes
require('./config/routes')(app, passport, auth)

app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
