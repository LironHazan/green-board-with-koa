/**
 * Created by liron on 10/17/15.
 */

'use strict';
angular.module('GreenBoard').service('LoginService', function ( $http ) {


    function login(userDetails){

        return $http.post('/backend/session/login', userDetails);
    }


    function logout(){
        return $http.get('/backend/session/logout');
    }
    this.login = login;
    this.logout = logout;
});
