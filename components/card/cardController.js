app.controller("cardController", function($scope){
	
	$scope.init = function(data){
		$scope.title = data.title;
		$scope.subtitle = data.subtitle;
		$scope.type = data.type;
		$scope.footer = data.footer;
		$scope.elements = data.elements;
		
		console.log("CARD DATA: ", data);
	};
	
	$scope.footerFunction = function(fx){
		if(fx == 'total') return ($scope.elements ? $scope.elements[0].data.length : 0);
		else return "UNKNOWN";
	};
});