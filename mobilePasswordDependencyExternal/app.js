angular.module('mobilePasswordModule', ['mobilePassword'])
.controller('mainCtrl', function($scope,$compile) {
	debugger;
	
	$scope.changePwdInput = function(a,b){ debugger;
		$scope[a];
		$scope[a+'P'];
		
		$scope.changeModel = a;
		$scope.changeOperation = b;
		
		
	}
	
    $scope.showHidePwdInput = function(a,b){ debugger;
		
		$scope[a];
		$scope[a+'P'];
		
		if($scope[a+'Temp']==undefined){
			$scope[a+'Temp']={};		
			$scope[a+'Temp'].changed='';
		}
		
		
		if(b=='show'){
			
			if($scope[a+'Temp'].changed=='' || $scope[a+'Temp'].changed=='hide'){ debugger;
				$scope[a+'Temp'].changed='show';
				
				$scope[a+'Temp'].value1 = $scope[a+'P'];
				//$scope[a+'Temp'].value2 = $scope[a];
				
				$scope[a]=$scope[a+'P'];			
			}
			
			if($scope[a].charCodeAt(0)==8226){
				debugger;
				$scope[a]=$scope[a+'P'];
				$scope[a+'Temp'].value1 = $scope[a+'P'];
			}
			
		}
				
		if(b=='hide'){
			
			if($scope[a+'Temp'].changed=='' || $scope[a+'Temp'].changed=='show'){ debugger;
				$scope[a+'Temp'].changed='hide';
				
				var bullets="";
				for (var i = 0; i < $scope[a].length; ++i) {
					bullets += String.fromCharCode(8226);
				}
				  				
				$scope[a]=bullets;
											
			}
			
		}
		
		
		

	}
	
	
	
});