pinboard = angular.module('pinboard', ['ui.router', 'lodash', 'underscore', 'restangular'])

pinboard.controller('testCrtl', ['$scope', function($scope){
  $scope.testProp = "hola";
}]);