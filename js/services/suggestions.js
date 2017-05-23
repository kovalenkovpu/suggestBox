app.factory('suggestions', ['$http', function($http) {
	let suggestionPromise = $http.get('https://sg-box.firebaseio.com/data.json')
		.then
			(function(response) {
    			return response.data;
  			});

  	return {
  		getSuggestions: suggestionPromise
  	};
}]);