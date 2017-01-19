var app = angular.module('appMain', []);


app.controller('topCtrl', ['$scope', function($scope) {
	
	$scope.$on('event1', function(evt, args){
		console.log(args.message + ' in topCtrl');
	});
	
}]);


app.controller('middleCtrl', ['$scope', function($scope) {
  
	$scope.middleBroadcast = function(){
		$scope.$broadcast('event1',{message:'broadcast event1 from middleCtrl'});
	}
	
	$scope.middleEmit = function(){
		$scope.$emit('event1',{message:'emit event1 from middleCtrl'});
	}
	
}]);


app.controller('lowerCtrl', ['$scope', function($scope) {

	$scope.$on('event1', function(evt, args){
		console.log(args.message + ' in lowerCtrl');
	});

}]);