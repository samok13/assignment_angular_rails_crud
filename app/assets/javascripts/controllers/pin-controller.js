pinboard.controller('pinCtrl', ['$scope', 'pinService', function($scope, pinService){

  $scope.pins = pinService.getPins();
  $scope.color = 'red';
  $scope.formData = {};

  $scope.buySell = function(bool) {
    if (bool) {
      $scope.color = 'green';
      return "For Sale";
    } else {
      $scope.color = 'red';
      return "Want to Buy";
    }
  };

  $scope.processForm = function(formIsValid) {

    if (formIsValid) {
      console.log('form gets here');
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

      pinService.createPin(pinObj);
    }
  };

}]);
