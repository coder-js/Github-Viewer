(function(){

	var app = angular.module("githubViewer", []);

	var MainCtrl = function($scope, $http){
  
  		var onUserComplete = function(response){
    		$scope.user = response.data;
    		$http.get($scope.user.repos_url)
    			.then(onRepos, onError)
  		};
  
  		var onRepos = function(response){
  			$scope.repos = response.data;
  		};

  		var onError = function(reason){
  			$scope.error = "Couldn't find data";
  		};

  		$scope.search = function(username){
  			$http.get("https://api.github.com/users/" + username)
    			.then(onUserComplete, onError);
  		};

  		$scope.message = "Using angular!";
  		
	};

	app.controller("MainCtrl", ["$scope", "$http", MainCtrl]);

}());