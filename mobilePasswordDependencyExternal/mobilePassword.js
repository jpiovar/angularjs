angular.module('mobilePassword', [])
.directive('password', ['$timeout', function($timeout) { debugger;
  function link(scope, element, attrs) {debugger;
    var lastSize = 0;
    var timer;
    var timeout = 200;
    scope[attrs.password] = '';
	
	
	scope.$watch(attrs.ngModel, function(value) {debugger;
	

	
		  if (value === undefined) {
			return;
		  }
		  if (lastSize == value.length) {
			return;
		  }
		  if (lastSize > value.length) {
			scope[attrs.password] = scope[attrs.password].substring(0, value.length-1);
		  } else {
			scope[attrs.password] += value.substring(value.length-1, value.length);
		  }
		  
		  
		  var bullets="";
			  
		  for (var i = 0; i < value.length; ++i) {
			bullets += String.fromCharCode(8226);
		  }
	  
		  lastSize = value.length;
		  if (! (timer === undefined )) {
			$timeout.cancel(timer);
		  }
		  timer = $timeout(function(){
			 if( scope[scope.changeModel+"Temp"]==undefined || (scope[scope.changeModel+"Temp"] && scope[scope.changeModel+"Temp"]['changed']!='show') ){
				scope[attrs.ngModel] = bullets; 
			 }			 
		   }, timeout);

	   
	});
	
  }
  return {
    restrict: 'A',
    link: link
  }
}]);