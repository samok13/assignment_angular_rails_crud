pinboard.controller('pinCtrl', ['$scope', 'pinService', function($scope, pinService){

  $scope.pins = pinService.getPins();

}]);