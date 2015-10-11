'use strict';

/**
 * Created by liron on 10/10/15.
 */

var koa = require('koa');
var app = koa();
var logger = require('koa-logger');
app.use(logger());

var route = require('koa-route');
var breez = require('./Breez');

// route middleware

app.use(route.get('/breez', breez.controller.AirQualityIsraelToday)); // routing to /breez will call the list function




module.exports = app;
