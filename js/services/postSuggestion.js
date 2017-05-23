app.factory('postSuggestion', ['$http', function($http) {
	return {
		postSuggestion: function(customData) {
			$http.post('https://sg-box.firebaseio.com/data/posts.json', customData)
				.then(function() {
	    			console.log('Success POST!');
	  			});
		}
	};
}]);