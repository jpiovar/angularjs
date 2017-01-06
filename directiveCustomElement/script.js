angular.module('simpleDirective', [])

.controller('Controller', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])

.directive('myCustomerDirective', function() {debugger;
	
	

  return {	  
	  
	link: function(scope, elem, attrs){

      console.log(attrs.myCustomer);
      console.log(attrs.anotherParam);
	  
	  elem.on('click',function(){
		  elem.css({'color':'red'});
		  scope.$apply(function() {
			  scope.color='red';
		  });
	  });

    },
	replace: false,
	restrict: 'AEC',
    template: function(elem, attrs){debugger;
		return 'color {{color}}  Name: {{customer.name}} Address: {{customer.address}} and '+attrs.myCustomer+' and '+attrs.anotherParam;
	}
  };
});