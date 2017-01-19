var app = angular.module('appMain', []);


app.controller('topCtrl', ['$scope','$rootScope', function($scope,$rootScope) {
	
	$scope.$on('event1', function(evt, args){
		console.log(args.message + ' in topCtrl');
	});
	
}]);


app.controller('middleCtrl', ['$scope','$rootScope', function($scope,$rootScope) {
  
	$scope.middleBroadcast = function(){
		$scope.$broadcast('event1',{message:'broadcast event1 from middleCtrl'});
	}
	
	$scope.middleEmit = function(){
		$scope.$emit('event1',{message:'emit event1 from middleCtrl'});
	}
	
	$scope.siblingBroadcast = function(){
		$rootScope.$broadcast('event1',{message:'broadcast event1 from middleCtrl'});
	}
	
}]);


app.controller('lowerCtrl', ['$scope','$rootScope', function($scope,$rootScope) {

	$scope.$on('event1', function(evt, args){
		console.log(args.message + ' in lowerCtrl');
	});

}]);


app.controller('siblingCtrl', ['$scope','$rootScope', function($scope,$rootScope) {

	$rootScope.$on('event1', function(evt, args){
		console.log(args.message + ' in siblingCtrl');
	});

}]);