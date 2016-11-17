angular.module('mobilePasswordModule', ['mobilePassword'])
.controller('mainCtrl', function($scope) {
	debugger;
	
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
				$scope[a+'Temp'].value2 = $scope[a];
				
				$scope[a]=$scope[a+'P'];			
			}
			
		}
		
		
		
		if(b=='hide'){
			
			if($scope[a+'Temp'].changed=='' || $scope[a+'Temp'].changed=='show'){ debugger;
				$scope[a+'Temp'].changed='hide';
				
				if($scope[a+'Temp'].value2){
					$scope[a]=$scope[a+'Temp'].value2;
				}
				
				
							
			}
			
		}
		
		
		

	}
	
	
	
});