/**
 * Created by liron on 10/16/15.
 */

var github = require('octonode');
var co = require('co');
var path = require('path');
//var config = require(path.join(__dirname, '../conf'));

/*var client;
exports.initClient = function(name, passwd){
    client= github.client({
        username: name,//config.git.name,
        password: passwd//config.git.passwd
    });

    return client;
};*/
//client = exports.initClient(config.git.name, config.git.passwd);

exports.login = function(token){
    return  new Promise (function(resolve, reject){
        var client = github.client(token);
        client.get('/user', {}, function (err, status, body, headers) {
            if(err) {
                console.error('error!', err.message);
                reject(err);
            }
            else{
                resolve(body);
            }
        });
    });
};

/*co(function* () {
    return yield exports.login(config.git.token);

}).then(function (value) {
    console.log(value);
}, function (err) {
    console.error('error!', err.message);
});*/






