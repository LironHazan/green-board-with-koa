/**
 * Created by liron on 10/17/15.
 */
'use strict';

angular.module('GreenBoard').service('GitBoardService', function ( $http ) {

    function getGitUserData(){
        return $http.get('/backend/git');
    }

    this.getGitUserData = getGitUserData;

});

