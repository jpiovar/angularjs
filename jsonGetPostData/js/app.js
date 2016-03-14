var app = angular.module('getpost', []);

app.controller('MainCtrl',['$scope','$http', function($scope,$http) {
	
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
		var url = 'post.php';
		$scope.codeStatus = '';
		$scope.dataPost = '';
		
		/*
		$http({
			method: method,
			url: url,
			data: formData1,
			headers: {'Content-Type':'application/x-www-form-urlencoded'}
		})
		.success(function (response){debugger;
			$scope.codeStatus = response.status;
		})
		.error(function (response){debugger;
			$scope.codeStatus = response.status || 'chyba';
		});
		*/
		$http.post("post.php",formData1)
		.success(function(data, status){debugger;
			$scope.codeStatus = status;
			$scope.dataPost = data;
		})
		.error(function (data, status){debugger;
			$scope.codeStatus = status.status || 'chyba';
		});
	}
	
	
	
	
	
  

  
  
  
  
}]);
