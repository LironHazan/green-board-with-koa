/**
 * Created by liron on 10/17/15.
 */

'use strict';
angular.module('GreenBoard').service('GitLoginService', function ( $http ) {


    function login(userDetails){

        return $http.post('/backend/git/login', userDetails);
    }


    function logout(){
        return $http.get('/backend/git/logout');
    }
    this.login = login;
    this.logout = logout;
});
