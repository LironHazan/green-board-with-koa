'use strict';

/**
 * Created by liron on 10/10/15.
 */

var koa = require('koa');
var app = koa();
var router = require('./routes'); //external file where all my routes
var session = require('koa-session');// cookie-based session middleware

var logger = require('koa-logger');
app.use(logger());

app.keys = ['secret!'];
app.use(session(app));

app.use(router.routes());
app.use(router.allowedMethods());


module.exports = app;
