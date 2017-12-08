var app = angular.module('plunker', ['angular-svg-round-progressbar']);

app.controller('MainCtrl', function($scope) {

    $scope.maxValue = 100;
    $scope.currentValue = 75;



    $scope.progressClickInc = function(){
        $scope.currentValue = $scope.currentValue + 10;
    }

    $scope.progressClickDec = function(){
        $scope.currentValue = $scope.currentValue - 10;
    }



});