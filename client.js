'use strict';
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var CryptoJS = require("crypto-js");
var express = require("express");
var bodyParser = require('body-parser');
var WebSocket = require("ws");
var http_port = process.env.HTTP_PORT || 4004;
var p2p_port = process.env.P2P_PORT || 6002;
var initialPeers = process.env.PEERS ? process.env.PEERS.split(',') : [];

 var app = express();
var path = require('path');
 app.listen(http_port,'0.0.0.0', () => console.log('Listening http on port: ' + http_port));

    
  //  app.use( '/', express.static( 'public' ) );
 app.get('/', function(req, res){
   res.sendFile(path.join(__dirname + '/test.html'));
});
