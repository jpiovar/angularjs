var app = angular.module('plunker', []);

app.controller('MainCtrl',['$scope','$http', function($scope,$http) {
  $scope.name = 'World1';
  $scope.met = function(){
    console.log('ok');
  }
  
  
	$http.get('data/items.json').success(function(data){
      $scope.items = data;
	  
	  $scope.convertSI();
	  
    });
	
	$scope.convertSI = function(){
	  /* convert input age from string to integer "30" to 30 */
	  angular.forEach($scope.items, function (item) {		
		item.age = parseInt(item.age);
	  });  
	  
	}
  

  
  
  
  
}]);
