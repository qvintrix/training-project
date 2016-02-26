var recipesApp = angular.module('recipesApp', ['ngRoute', 'ngSanitize', 'ngStorage']);

recipesApp.config(function ($routeProvider) {
    $routeProvider.when("/ideas", {
        templateUrl: "pages/ideas.html",
        controller: "ideasController"
    });

    $routeProvider.when("/lists", {
        templateUrl: "pages/lists.html",
        controller: "recipesController"
    });

    $routeProvider.when('/myRecipes', {
        templateUrl: 'pages/myRecipes.html',
        controller: 'recipesController',
    })

    $routeProvider.when('/myRecipes/edit', {
        templateUrl: 'pages/addRecipe.html',
        controller: 'recipesController',
    })


    $routeProvider.when('/myRecipes/addRecipe', {
        templateUrl: 'pages/addRecipe.html',
        controller: 'recipesController',
    })

    $routeProvider.when("/lists/:state/:listItemId", {
        templateUrl: "pages/viewRecipe.html",
        controller: "recipesController"
    });


    $routeProvider.when('/ideas/:ideaItemId', {
        templateUrl: 'pages/viewRecipe.html',
        controller: 'recipesController',
    })

    $routeProvider.when('/myRecipes/:myRecipeItemId', {
        templateUrl: 'pages/viewRecipe.html',
        controller: 'recipesController',
    })



    $routeProvider.otherwise({
        redirectTo:'/ideas'
    })
})

