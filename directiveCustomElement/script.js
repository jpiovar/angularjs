angular.module('simpleDirective', [])

.controller('Controller', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])

.directive('myCustomerDirective', function() {debugger;
	
	

  return {	  
	  
	link: function(scope, element, attributes){

      console.log(attributes.myCustomer);
      console.log(attributes.anotherParam);

    },
	replace: false,
	restrict: 'AEC',
    template: function(elem, attr){debugger;
		return 'Name: {{customer.name}} Address: {{customer.address}} and '+attr.myCustomer+' and '+attr.anotherParam;
	}
  };
});