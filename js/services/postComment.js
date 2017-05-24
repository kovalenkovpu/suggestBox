app.factory('postComment', ['$http', function($http) {
	return {
		postComment: function(data, url) {
			$http.post(url, data)
				.then(function() {
	    			console.log('Success POST comment!');
	  			});
		}
	}
}]);