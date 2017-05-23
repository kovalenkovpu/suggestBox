app.controller('HomeController', ['$scope', '$http', 'suggestions', 'postSuggestion', function($scope, $http, suggestions, postSuggestion) {
	let isLiked = {};
	
	suggestions.getSuggestions.then(function(data) {
		$scope.posts = data.posts;

		storageInit();
	});
	
	$scope.addSuggestion = function() {

		if (!$scope.title || $scope.title === '') return;

		let dataObj = {
			id: $scope.posts[$scope.posts.length - 1].id + 1,
			title: $scope.title,
			upvotes: 0,
			comments: []
		};

		postSuggestion.postSuggestion(dataObj);

		$scope.posts.push(dataObj);
		storageInit();
		$scope.title = '';
	};

	$scope.upVote = function(post) {
		let voteObj = JSON.parse(localStorage.getItem('isLiked'));

		if (voteObj[post.id] == 1) {
			post.upvotes -= 1;
			voteObj[post.id] = 0;
			localStorage.setItem('isLiked', JSON.stringify(voteObj));
		} else if ( voteObj[post.id] == 0 ) {
			post.upvotes += 1;
			voteObj[post.id] = 1;
			localStorage.setItem('isLiked', JSON.stringify(voteObj));
		};
	};

	function storageInit() {
		if (localStorage.getItem('isLiked')) {
			isLiked = JSON.parse(localStorage.getItem('isLiked'));
		};

		for (let i = 0; i < $scope.posts.length; i++) {
			if (isLiked[i] === undefined) {
				isLiked[i] = 0;
			}
		};
		
		localStorage.setItem('isLiked', JSON.stringify(isLiked));
	};
}]);