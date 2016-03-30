var app = angular.module('changer', []);

app.controller('MainCtrl',['$scope','$http','$location', function($scope,$http,$location) {

	
	
	$(document).ready(function(){		
		
    });
	
	
	$("#item2").watch('class',function(){
		alert('watcher after changed class removed item2');
	});
	
  
}]);