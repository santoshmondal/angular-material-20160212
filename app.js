/**
 * Created by santosh on 2/11/17.
 */
var app = angular.module("app", ["ngMaterial"]);

app.controller("first", ["$scope", function($scope){

    $scope.name = "Hello Pooja.";

}]);