/**
 * Created by liron on 10/10/15.
 */

//var parse = require('co-body');
var request = require('koa-request');
var path = require('path');
var config = require(path.join(__dirname, '../conf'));

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

