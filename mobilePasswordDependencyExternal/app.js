angular.module('mobilePasswordModule', ['mobilePassword'])
.controller('mainCtrl', function($scope,$compile) {
	
	
	$scope.changePwdInput = function(a,b){ 
		$scope[a];
		$scope[a+'P'];
		
		$scope.changeModel = a;
		$scope.changeOperation = b;		
		
	}
	
    $scope.showHidePwdInput = function(a,b){ 
		
		$scope[a];
		$scope[a+'P'];
		
		if($scope[a+'Temp']==undefined){
			$scope[a+'Temp']={};		
			$scope[a+'Temp'].changed='';
		}
		
		
		if(b=='show'){
			
			if($scope[a+'Temp'].changed=='' || $scope[a+'Temp'].changed=='hide'){ 
				$scope[a+'Temp'].changed='show';
				
				$scope[a+'Temp'].value1 = $scope[a+'P'];
				$scope[a]=$scope[a+'P'];			
			}
			
			if($scope[a].charCodeAt(0)==8226){
				
				$scope[a]=$scope[a+'P'];
				$scope[a+'Temp'].value1 = $scope[a+'P'];
			}
			
		}
				
		if(b=='hide'){
			
			if($scope[a+'Temp'].changed=='' || $scope[a+'Temp'].changed=='show'){ 
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