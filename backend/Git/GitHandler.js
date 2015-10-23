/**
 * Created by liron on 10/16/15.
 */

var github = require('octonode');
var path = require('path');

exports.login = function(user){
    return  new Promise (function(resolve, reject){
        var client = github.client(user);
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








