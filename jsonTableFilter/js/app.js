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
	
	$scope.clearFilter = function() {debugger;
	  
      console.log("clear filter");
      if($scope.filterS == "") {
		  $scope.filterS = undefined;
	  }
	  
    };
  
	$scope.orderS = function(os) {debugger;
	  
      

	  $scope.ordReverse = !$scope.ordReverse;
	  
	  if(os != $scope.ordS){
		  $scope.ordReverse = false;
	  }
      
	  
	  console.log("ordering" + os);
	  
	  $scope.ordS = os;
	  

	  
	  /*
	  if(os != $scope.ordS){
		  $scope.ordReverse = false;
	  } else{
		$scope.ordReverse = true;
	  }
	  */
	  
	  
    };
  
  
  
  
}]);
