/**
 * Created by liron on 10/10/15.
 */

var request = require('koa-request');
var path = require('path');
var config = require(path.join(__dirname, '../conf'));
var gitHandler = require('./GitHandler');

module.exports.getGit = function *() {
    this.body = yield gitHandler.login(config.git.token);
};

