pinboard = angular.module('pinboard', ['ui.router', 'restangular']);

pinboard.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('');

  $stateProvider
    .state('pinboard', {
      url: '',
      templateUrl: 'templates/pinIndex.html',
      controller: 'pinCtrl'
    });
}]);

pinboard.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({
    "content-type": "application/json"
  });
  //what is 'operation', enabling this doesn't work..
  // RestangularProvider.setResponseExtractor(function(response){
  //   return response.data
  // });
}]);

// pinboard.controller('testCtrl', ['$scope', function($scope){
//   $scope.testProp = "hola";
//   $scope.hello = "hi";
// }]);
