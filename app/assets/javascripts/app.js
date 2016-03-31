pinboard = angular.module('pinboard', ['ui.router', 'restangular']);

pinboard.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/post');

  $stateProvider
    .state('pinboard', {
      url: '/post',
      templateUrl: 'templates/hello.html',
      controller: 'testCtrl'
    });
});

pinboard.controller('testCtrl', ['$scope', function($scope){
  $scope.testProp = "hola";
  $scope.hello = "hi";
}]);
