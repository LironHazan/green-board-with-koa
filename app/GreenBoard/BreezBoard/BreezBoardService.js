/**
 * Created by liron on 10/17/15.
 */
'use strict';
angular.module('GreenBoard').service('BreezBoardService', function ( $http ) {

    function getBreezInIsrael(){
        return $http.get('/backend/breez');
    }

    this.getBreezInIsrael = getBreezInIsrael;

});
