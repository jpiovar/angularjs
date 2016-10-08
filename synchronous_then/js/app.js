var app = angular.module('synch', []);

app.controller('MainCtrl', function($scope,$http) { debugger;

  $scope.startProcess = function(){ debugger;
    console.log('start process');

    return true;
  }

  $scope.endProcess = function(){
    console.log('end process');
  }
  
  $scope.getData = function() { debugger;
    
    console.log('get start');

    var getValue1 = $http.get('data/items.json').success(function(data){
      $scope.itemsData = data; 

      console.log('get inside');

    });

    console.log('get end');
    
    return getValue1;
  }



  $scope.runProcesses = function(){ debugger;

    $scope.getData()
    .then(function(){ debugger;
      $scope.endProcess();
    });

  }



  

});