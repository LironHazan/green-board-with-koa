/**
 * Created by liron on 10/10/15.
 */

//var request = require('koa-request');
var path = require('path');
var config = require(path.join(__dirname, '../conf'));
var gitHandler = require('./GitHandler');
var logger = require('koa-logger');



module.exports.getGit = function *(next) {

     this.session.creds = this.request.body;
     var creds = {username:this.session.creds.email, password:this.session.creds.passwd};
     this.body = yield gitHandler.login(creds);
};

