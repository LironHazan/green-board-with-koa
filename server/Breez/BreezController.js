/**
 * Created by liron on 10/10/15.
 */

//var parse = require('co-body');
var request = require('koa-request');
var path = require('path');
var config = require(path.join(__dirname, '../conf'));
var gitHandler = require('./../Git/GitHandler');

var key = config.apiKey;
var url = 'http://api-beta.breezometer.com/baqi/?location=tel+aviv-yafo,+israel&key='+key;

module.exports.AirQualityIsraelToday = function *() {
    this.body =  'hello';

    var options = {
        url: url,
        headers: { 'User-Agent': 'request' }
    };

    var response = yield request(options);
    var info = JSON.parse(response.body);
    this.body = 'Air quality today in Israel: ' + info.breezometer_description;

};

module.exports.getGit = function *() {
    this.body = yield gitHandler.login(config.git.token);
};

