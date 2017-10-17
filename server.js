var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var indexRouter = require('./routes/index');
var pet = require('./routes/pet');
var records = require('./routes/records');
var port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));



app.use('/', indexRouter);
app.use('/pet', pet);

app.use('/records', records);

app.listen(port, function(){
    console.log('listening on port', port);
});