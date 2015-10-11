'use strict';

var http = require('http');
var app = require('./server/app');

app.on('error', function(err){
  log.error('server error', err);
});

// listen
http.createServer(app.callback()).listen(3000);
console.log('listening on port 3000');
