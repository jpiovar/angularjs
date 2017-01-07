angular.module('simpleDirective', [])

.controller('Controller', ['$scope','$timeout', function($scope,$timeout) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
  
  $scope.ok = function(){
	  $scope.color1;
	  debugger;
  }
}])

.directive('myCustomerDirective', function($timeout) {debugger;
	
	

  return {	  
	scope: { color1: '=', name1: '@', age: '@age1' },
	//scope: { color1: '=color1', name1: '@', age: '@age1' },
	//transclude: true,
	
	
	replace: false,
	restrict: 'AEC',
    template: function(elem, attr){debugger;
		return 'color1 {{color1}}  Name: {{name1}} Age: {{age}} ||   '+attr.color1+' and '+attr.name1+' and '+attr.age;
	},
	
	link: function(scope, elem, attr){ debugger;
	  console.log(attr.color1);
      console.log(attr.name1);
      console.log(attr.age1);
	  
	  elem.on('click',function(){ debugger;
		  elem.css({'color':scope.color1});
		  
		  scope.color1='red11';
		  scope.$apply(function() {
			  scope.color1="blue";
			  
			  				  
		  });
		  
		  
		  


	  });

    }
	
	
  };
});