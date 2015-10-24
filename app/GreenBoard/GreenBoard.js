'use strict';

angular.module('GreenBoard', [
    'ui.router',
    'ui.bootstrap'
]);


angular.module('GreenBoard').config(function($stateProvider) {

    $stateProvider.state('GreenBoard', {
       /// abstract: true,
        url: '/home',
        templateUrl: 'GreenBoard/GreenBoard.html'// The controller is specified in the html template
    }).state('GreenBoard.breez', {
            url: '/breezboard',
            templateUrl: 'GreenBoard/BreezBoard/BreezBoard.html'
        }).state('GreenBoard.git', {
        url: '/gitboard',
        templateUrl: 'GreenBoard/GitBoard/GitBoard.html'
    });
});
