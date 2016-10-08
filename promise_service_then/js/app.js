var app = angular.module('synch', []);


app.service('servise1',function($http,$q){ debugger;
  this.ser1Value='  START Service servise1';
  this.getData1 = function(){
    return $http.get('data/items.json').success(function(data){ debugger;
      //$scope.itemsData = data; 

      console.log('get inside');

      return data;

    });
  }
});



app.controller('MainCtrl', function($scope,$http,servise1) { debugger;


  $scope.run = function(){ debugger;

    console.log(servise1.ser1Value);

    servise1.getData1()
    .then(function(data){ debugger;
      console.log('ok service done');
      console.log(data);
    });

  }



  

});