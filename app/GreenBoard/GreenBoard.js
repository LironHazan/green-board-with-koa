'use strict';

angular.module('GreenBoard', [
    'ui.router',
    'ui.bootstrap'
]);


angular.module('GreenBoard').config(function($stateProvider) {

    $stateProvider.state('GreenBoard', {
        url: '/home',
        templateUrl: 'GreenBoard/GreenBoard.html',
        controller: 'GreenBoardCtrl'
    });
});
