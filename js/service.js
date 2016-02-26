    recipesApp.factory('GetDataService', ['$http', function($http) {

      var myService = {
        async: function() {
          var promise = $http.get('https://jsonblob.com/api/jsonBlob/56c089b3e4b01190df4ef1ce').then(function (response) {
            return response.data;
          });
          return promise;
        }
      };
      return myService;

    }]);

    recipesApp.factory('MediumService', [function(){

     var activeObj;
     var withTwoObj;

     function getEditObj() {
      return activeObj;
    };

    function getTwoObj() {
      return withTwoObj;
    };

    return {

      getTempRecipe: function(current){

        return activeObj = angular.merge({}, current);

      },

      getEditObj: getEditObj,

      getNewTempRecipe: function(){

        var newRecipe = {
          description: "",
          ingredients: ["","",""], 
          instruction: "",    
          photoUrl: "",
          title: ""
        }
        return activeObj = newRecipe;
      }  

    }
  }]);

    recipesApp.service('getLocalStorage', ['$localStorage', function($localStorage) {

      if(!$localStorage.generalRecipes){
        $localStorage.generalRecipes = [];
      }
      if(!$localStorage.select){
        $localStorage.select = [];
      }
      if(!$localStorage.purchases){
        $localStorage.purchases = [];
      }
      if(!$localStorage.planned){
        $localStorage.planned = [];
      }


      this.getMyRecipes = function(){
        return $localStorage.generalRecipes;
      }
      this.getLoveRec = function(){
        return $localStorage.select;
      }
      this.getPickRec = function(){
        return $localStorage.purchases;
      }
      this.getPlanRec = function(){
        return $localStorage.planned;
      }

      this.check = function (obj) {
       if($localStorage.generalRecipes.map(function(e) { return e.title; }).indexOf(obj.title) === -1){
        $localStorage.generalRecipes.push(obj);
      } else{
        angular.merge($localStorage.generalRecipes[$localStorage.generalRecipes.map(function(e) { return e.title; }).indexOf(obj.title)], obj)
      }
    }
    this.pushLoveRecs = function(obj){
      if($localStorage.select.map(function(e) { return e.title; }).indexOf(obj.title) === -1){
        $localStorage.select.push(obj)
      }
      return
    }
    this.pushPlanRec = function(obj){
      if($localStorage.planned.map(function(e) { return e.title; }).indexOf(obj.title) === -1){
        $localStorage.planned.push(obj)
      }
      return
    }

    this.pushPickRecs = function(obj){
      if($localStorage.purchases.map(function(e) { return e.title; }).indexOf(obj.title) === -1){
        $localStorage.purchases.push(obj)
      }
      return
    }

    this.pressLoveRecs = function(obj){
      if($localStorage.select.map(function(e) { return e.title; }).indexOf(obj.title) !== -1){
        return true;
      }
      return false;
    }

    this.pressPlanRec = function(obj){
      if($localStorage.planned.map(function(e) { return e.title; }).indexOf(obj.title) !== -1){
        return true;
      }
      return false;
    }

    this.pressPickRecs = function(obj){
      if($localStorage.purchases.map(function(e) { return e.title; }).indexOf(obj.title) !== -1){
        return true;
      }
      return false;
    }

  }]);
