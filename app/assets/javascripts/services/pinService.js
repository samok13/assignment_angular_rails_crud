pinboard.factory('pinService', ['Restangular', function(Restangular){

  var getPins = function(){
    return Restangular.all('pins').getList().$object;
  };

  var createPin = function(pinObj) {
    return Restangular.all('pins').post(pinObj);
  };

  var updatePin = function(id){
    return Restangular.one('pins', id).get();
  };

  return{
    getPins: getPins,
    createPin: createPin,
    updatePin: updatePin
  };



}]);
