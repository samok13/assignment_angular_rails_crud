pinboard.factory('pinService', ['Restangular', function(Restangular){

  var getPins = function(){
    return Restangular.all('pins').getList().$object;
  };

  var createPin = function(pinObj) {
    return Restangular.all('pins').post(pinObj);
  };

  return{
    getPins: getPins,
    createPin: createPin
  };

}]);
