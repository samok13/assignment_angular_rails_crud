pinboard.controller('editCtrl', ['$scope', 'pinService', '$stateParams', function($scope, pinService, $stateParams){

  $scope.pin = $stateParams.pin;
  $scope.formUpdateData = {};

  $scope.formUpdateData.itemName = $scope.pin.item_name;
  $scope.formUpdateData.description = $scope.pin.description;

  if($scope.pin.buy_sell){
    $scope.formUpdateData.buySell = "sell";
  }
  else{
    $scope.formUpdateData.buySell = "buy";
  }

    
  $scope.updateForm = function(formIsValid){
    if (formIsValid) {
      //console.log('form gets here');
      var bool = '';
      if ($scope.formUpdateData.buySell == 'sell') {
        bool = true;
      } else {
        bool = false;
      }
      var pinObj = { pin: {
        item_name: $scope.formUpdateData.itemName,
        buy_sell: bool,
        description: $scope.formUpdateData.description,
        user_id: $scope.pin.user.id
      } };


      pinService.updatePin($scope.pin.id).then(function(response){
          //console.log(response);
          response.put(pinObj);
      })
    } 
  }
}]);

