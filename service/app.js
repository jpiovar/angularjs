var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.met = function(){
    console.log('ok');
  }
  
});


app.service('communicate',function(){
  this.communicateValue='  START Service Hello STOP';
  this.methodService = function(){
    return 'hura';
  }
});

app.controller('ParentCtrl',function($scope,communicate){
  $scope.parentv = communicate.communicateValue+" Parent World ";
  $scope.methodP = function(){
	console.log('PARENT');
	console.log('parent ctrl ',communicate.methodService());
  }
});

app.controller('ChildCtrl',function($scope,communicate){
  $scope.childv = communicate.communicateValue+" Child World ";
  $scope.methodC = function(){
    console.log('CHILD');
    console.log('child ctrl ',communicate.methodService()); 
  }

});