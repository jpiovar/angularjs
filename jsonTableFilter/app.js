var app = angular.module('plunker', []);

app.controller('MainCtrl',['$scope','$http', function($scope,$http) {
  $scope.name = 'World1';
  $scope.met = function(){
    console.log('ok');
  }
  
  $http.get('data/items.json').success(function(data){debugger;
    $scope.items = data;
  });
  
}]);