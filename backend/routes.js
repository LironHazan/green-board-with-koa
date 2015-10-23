/**
 * Created by liron on 10/23/15.
 */

var router = require('koa-router')();
var koaBody = require('koa-body')(); // for getting the request.body in post

var breez = require('./Breez');
var git = require('./Git');

router.get('/backend/breez', breez.controller.AirQualityIsraelToday);

router.post('/backend/git/login', koaBody,  git.controller.getGit);

module.exports = router;
