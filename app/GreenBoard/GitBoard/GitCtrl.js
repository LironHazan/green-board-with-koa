/**
 * Created by liron on 10/17/15.
 */
'use strict';

angular.module('GreenBoard').controller('GitCtrl', function ( $scope, $uibModal) {


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
});


