app.controller("elementController", function($scope, $http){
	
	$scope.subdata = [];
	$scope.sending = false;
	
	$scope.init = function(data){
		$scope.type = data.type;
		$scope.data_source = data.data;
		$scope.numbered = data.numbered;
		
		console.log("ELEMENT DATA: ", data);
		
		$scope.update($scope.data_source.url);
	};
	
	$scope.update = function(url){
		$scope.sending = true;
		$http.get(url).then(
			function(response)
    		{
				$scope.sending = false;
				console.log("SUCCESS IN GETTING DATA FROM " + url, response.data);
				$scope.subdata = response.data.details;
			},
			function myError(response) {
				$scope.sending = false;
            	console.log("ERROR IN GETTING DATA FROM " + url, response);
			}
		);
	};
});