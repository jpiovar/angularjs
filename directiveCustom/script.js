angular.module('docsSimpleDirective', [])

.controller('Controller', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])

.directive('myCustomer', function() {
  return {
	  
	link: function(scope, element, attributes){

      console.log(attributes.myCustomer);
      console.log(attributes.anotherParam);

    },
	
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});