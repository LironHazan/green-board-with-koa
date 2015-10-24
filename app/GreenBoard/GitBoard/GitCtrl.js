/**
 * Created by liron on 10/17/15.
 */
'use strict';

angular.module('GreenBoard').controller('GitCtrl', function ( $scope, $rootScope, $uibModal, $log,  $localStorage) {


    $scope.open = function () {

        $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'GreenBoard/GitBoard/Login/LoginModal.html',
            controller: 'GitLoginCtrl',
            windowClass: 'center-modal',
            size: 'sm',
            resolve: {
                item: function () {
                    return $scope.item;
                }
            }
        });
        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    };

    //$scope.gravatar = null;
    $scope.$storage = $localStorage;

    $rootScope.$on('userLoggedIn',function(event, data) {
        $log.info(data);
        // $scope.gravatar
        $scope.$storage.gravatar = data.data.avatar_url;
    });

});


