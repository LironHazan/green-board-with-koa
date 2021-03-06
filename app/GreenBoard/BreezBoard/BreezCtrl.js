/**
 * Created by liron on 10/17/15.
 */
'use strict';

angular.module('GreenBoard').controller('BreezCtrl', function (BreezBoardService, $scope) {


    BreezBoardService.getBreezInIsrael().success(function(breezObject) {
        console.log(breezObject);

        changeBreezColor('.country-header-color', breezObject.country_color);
        $scope.country_name = 'Current Air Quality in ' + breezObject.country_name;

        changeBreezColor('.description-color', breezObject.breezometer_color);
        $scope.breezometer_description = breezObject.breezometer_description;

        // changeBreezColor('.dynamic-text', breezObject.breezometer_color)
        $scope.children = breezObject.random_recommendations.children;
        $scope.health = breezObject.random_recommendations.health;
        $scope.inside = breezObject.random_recommendations.inside;
        $scope.outside = breezObject.random_recommendations.outside;
        //inside
        //outside

    }).error(function(err) {
        console.log(err);
    });


    function changeBreezColor(element, color){
        angular.element(element).css('color',color);
    }

});


