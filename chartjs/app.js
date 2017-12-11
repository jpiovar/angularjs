var app = angular.module('plunker', ['chart.js']);

app.controller('MainCtrl', function($scope) {


    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    // $scope.colors = [{
    //     fillColor: 'rgba(47, 132, 71, 0.8)',
    //     strokeColor: 'rgba(47, 132, 71, 0.8)',
    //     highlightFill: 'rgba(47, 132, 71, 0.8)',
    //     highlightStroke: 'rgba(47, 132, 71, 0.8)'
    // }];


    $scope.colors = ['#72C02C', '#ff0000'];
  
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

   

    $scope.setValues = function(){
    

        $scope.data = [
            [70, 10, 90, 81, 56, 55, 40],
            [3, 2, 4, 19, 86, 27, 90]
          ];
        

    }




});