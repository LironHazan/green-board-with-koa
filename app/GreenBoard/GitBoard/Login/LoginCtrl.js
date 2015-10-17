/**
 * Created by liron on 10/17/15.
 */
angular.module('GreenBoard').controller('LoginCtrl', function ( $scope, item, $modalInstance, $log, LoginService) {
//modal

    $scope.item = item;
   // $scope.isLogin = false;

    $scope.login = function () {

        if ($scope.item && $scope.item.email && $scope.item.passwd) {
           // $scope.isLogin = true;
            LoginService.login({email:$scope.item.email, passwd:$scope.item.passwd}).then( function success (){

            }, function error(err){
              //  $scope.isLogin = false;

            });

        }
    };
});
