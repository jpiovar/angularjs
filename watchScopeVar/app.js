var app = angular.module('changer', []);

app.controller('MainCtrl',['$scope','$http','$location', function($scope,$http,$location) {

	
	
	$scope.$watch('in1',function(newVal, oldVal) { debugger;
		console.log(newVal, oldVal);
	});
	
	
	
	$scope.clickVar = function(){ debugger;
		$scope.var1 = 'ok';
	}
	
	
	$scope.$watch('var1',function(newVal, oldVal) { debugger;
		console.log(newVal, oldVal);
	});
	
  
}]);