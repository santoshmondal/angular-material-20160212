/**
 * Created by santosh on 2/11/17.
 */
var app = angular.module("app", ["ngMaterial", "ngMdIcons"]);

app.config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet("assets/svg/mdi.svg", 24);
}]);

app.controller("first", ["$scope", function($scope){

    $scope.name = "Hello";


}]);


