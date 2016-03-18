var app = angular.module('locator', []);

app.controller('MainCtrl',['$scope','$http','$location', function($scope,$http,$location) {

	$scope.ok = "ok";
	
	$scope.name = "jp";
    $scope.url = $location.host();
    $scope.path = $location.path();
    $scope.params = $location.search();
	$scope.hashe = $location.hash();
	
	console.log($scope.params);
	console.log($scope.hashe);
  
}]);