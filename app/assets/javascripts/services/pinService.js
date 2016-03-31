pinboard.factory('pinService', ['Restangular', function(Restangular){

  var getPins = function(){
    return Restangular.all('pins').getList().$object;
  };


  return{
    getPins: getPins
  };

}]);