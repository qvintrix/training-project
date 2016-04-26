recipesApp.controller('ideasController', ['$scope', 
																					'GetDataService', 
																					'MediumService', 
											function ($scope, GetDataService, MediumService) {

	GetDataService.async().then(function(data) {
		$scope.dataRecipes = data;

	});

}]);


