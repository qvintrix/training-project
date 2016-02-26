recipesApp.controller('recipesController', ['$scope', '$routeParams','MediumService', 'getLocalStorage', 'GetDataService', function ($scope, $routeParams,MediumService, getLocalStorage, GetDataService) {

	$scope.loveRecipes = getLocalStorage.getLoveRec()
	$scope.plannedRec = getLocalStorage.getPlanRec();
	$scope.pickedRec = getLocalStorage.getPickRec();


	$scope.itemFromServ = $routeParams.ideaItemId
	$scope.itemFromLs = $routeParams.myRecipeItemId
	$scope.itemlists = $routeParams.listItemId
	$scope.state = $routeParams.state
//show list from localStorage
$scope.listRecipes = getLocalStorage.getMyRecipes();


//active recipe on viewRecipe.html
GetDataService.async().then(function(data) {					
  	//all objs from server
  	$scope.arrObj = data.recipes;

  	if($scope.itemFromServ !== undefined){
  		$scope.flag = true;
  		$scope.oneRecipe = $scope.arrObj[$scope.itemFromServ]
  	} 
  	if($scope.itemFromLs !== undefined){
  		$scope.oneRecipe = $scope.listRecipes[$scope.itemFromLs]
  	} 



  	if($scope.itemlists !== undefined){
  		if($routeParams.state === 'scheduled'){
  			$scope.oneRecipe = $scope.plannedRec[$scope.itemlists];  	
  		}else {
  			$scope.oneRecipe = $scope.loveRecipes[$scope.itemlists]; 
  		}

  	}

  	if($scope.oneRecipe === undefined){
  		return 
  	}
  	if(getLocalStorage.pressLoveRecs($scope.oneRecipe)){
  		$scope.isFavourite = true;
  	}
  	if(getLocalStorage.pressPlanRec($scope.oneRecipe)){
  		$scope.isPlanned = true;
  	}
  	if(getLocalStorage.pressPickRecs($scope.oneRecipe)){
  		$scope.isPurchases = true;
  	}
  })

// active recipe on addRecipe.html
$scope.changeData = MediumService.getEditObj();

//save on edit.html
$scope.editRecipe = function(){
	getLocalStorage.check(MediumService.getEditObj());
	console.log('update LS')
}

//create copy obj
$scope.changeOnEdit = function(){
	MediumService.getTempRecipe($scope.oneRecipe);

}
//add new Recipe form
$scope.addNewRecipe = function(){
	MediumService.getNewTempRecipe();
};

// save to LocalStorage active obj
$scope.saveLocalGeneralRecipes = function(){

	return getLocalStorage.check($scope.oneRecipe);

}
//add field for ingridients
$scope.addIngridient = function(){
	$scope.changeData.ingredients.push("");
}

$scope.favorites = function(event){
	if($scope.itemFromServ === undefined){
		getLocalStorage.pushLoveRecs($scope.oneRecipe);		
	} else{
		getLocalStorage.pushLoveRecs($scope.oneRecipe);
	}

	getLocalStorage.pressLoveRecs($scope.oneRecipe)
	if(getLocalStorage.pressLoveRecs($scope.oneRecipe)){
		$scope.isFavourite = true;
	}
}

$scope.planned = function(event){
	if($scope.itemFromServ === undefined){
		getLocalStorage.pushPlanRec($scope.oneRecipe);		
	} else{
		getLocalStorage.pushPlanRec($scope.oneRecipe);
	}

	getLocalStorage.pressPlanRec($scope.oneRecipe)
	if(getLocalStorage.pressPlanRec($scope.oneRecipe)){
		$scope.isPlanned = true;
	}
}

$scope.listForShop = function(event){
	if($scope.itemFromServ === undefined){
		getLocalStorage.pushPickRecs($scope.oneRecipe);		
	} else{
		getLocalStorage.pushPickRecs($scope.oneRecipe);
	}	

	getLocalStorage.pressPickRecs($scope.oneRecipe)
	if(getLocalStorage.pressPickRecs($scope.oneRecipe)){
		$scope.isPurchases = true;
	}
}


}]);