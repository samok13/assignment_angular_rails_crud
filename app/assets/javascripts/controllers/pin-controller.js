pinboard.controller('pinCtrl', ['$scope', 'pinService', '$stateParams', function($scope, pinService, $stateParams){

  $scope.pins = pinService.getPins();
  $scope.color = 'green';
  $scope.formData = {};
  $scope.pin = $stateParams.pin;


  $scope.buySell = function(bool) {
    if (bool) {
      //$scope.color = 'green';
      return "For Sale";
    } else {
      //$scope.color = 'red';
      return "Want to Buy";
    }
  };

  $scope.processForm = function(formIsValid) {

    if (formIsValid) {
 
      var bool = '';
      if ($scope.formData.buySell == 'sell') {
        bool = true;
      } else {
        bool = false;
      }
      var pinObj = { pin: {
        item_name: $scope.formData.itemName,
        buy_sell: bool,
        description: $scope.formData.description,
        user_id: 1
      } };

      pinService.createPin(pinObj).then(function(response){
        $scope.pins.unshift(response);
      });
    }
  };

}]);
