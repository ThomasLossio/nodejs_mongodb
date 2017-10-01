var express = require('express');
var http = require('http');
var load = require('express-load');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 3000);
//app.use(app.router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

load('models').then('controllers').then('routes').into(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Servidor iniciado na porta: ' + app.get('port'));
});

