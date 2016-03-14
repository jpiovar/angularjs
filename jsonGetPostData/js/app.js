var app = angular.module('getpost', []);

app.controller('MainCtrl',['$scope','$http','$templateCache', function($scope,$http,$templateCache) {
	
	$scope.getData = function() {debugger;
	
		$http.get('data/items.json').success(function(data){
		  $scope.itemsData = data;	  
		});
		
	}
	
	$scope.addRow = function(){ debugger;
		var formData = {
			'id': $scope.id,
			'name': $scope.name,
			'age': $scope.age,
			'quantity': $scope.quantity,
			'price': $scope.price
		}
		
		$scope.postMethod(formData);
		
	}
	
	$scope.postMethod = function(formData1){debugger;
		var method = 'POST';
		$scope.url = 'post.php';
		$scope.code = null;
		$scope.response = null;
		$scope.dataPost = '';
		
		
		$http({method: $scope.method, url: $scope.url, cache: $templateCache}).
        then(function(response) {debugger;
          $scope.status = response.status;
          $scope.data = response.data;
        }, function(response) {debugger;
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
		});
		
		
		/*
		$http.post("post.php",formData1)
		.success(function(data, status){debugger;
			$scope.codeStatus = status;
			$scope.dataPost = data;
		})
		.error(function (data, status){debugger;
			$scope.codeStatus = status.status || 'chyba';
		});
		*/
	}
	
	
	
	
	
  

  
  
  
  
}]);
