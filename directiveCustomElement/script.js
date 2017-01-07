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
	scope: false,
	transclude: true,
	/*scope: {
                    color1: '=',
					color: '='
    },*/
	
	link: function(scope, elem, attrs){ debugger;

      console.log(attrs.myCustomer);
      console.log(attrs.anotherParam);
	  
	  elem.on('click',function(){ debugger;
		  elem.css({'color':'red'});
		  
		  scope.color1='red';
		  scope.$apply(function() {
			  scope.color='red';
			  //scope.color1='red';
			  				  
		  });
		  
		  $timeout(function () {
                        scope.color1 = 'Bye bye!'
                    }, 200);
		  


	  });

    },
	
	replace: false,
	restrict: 'AEC',
    template: function(elem, attrs){debugger;
		return 'color {{color}}  Name: {{customer.name}} Address: {{customer.address}} and '+attrs.myCustomer+' and '+attrs.anotherParam;
	}
  };
});