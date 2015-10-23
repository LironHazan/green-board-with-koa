/**
 * Created by liron on 10/17/15.
 */
angular.module('GreenBoard').controller('GitLoginCtrl', function ( $scope, item, $modalInstance, $log, GitLoginService) {
//modal

    $scope.item = item;
   // $scope.isLogin = false;

    $scope.login = function () {

        if ($scope.item && $scope.item.email && $scope.item.passwd) {
           // $scope.isLogin = true;
            GitLoginService.login({email:$scope.item.email, passwd:$scope.item.passwd}).then( function success (){

            }, function error(err){
              //  $scope.isLogin = false;

            });

        }
    };
});
