app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	let isCommentLiked = {};

	$scope.posts = suggestions.posts;
	$scope.post = $scope.posts[$routeParams.id];
	$scope.comments = $scope.post.comments;

	$scope.addComment = function() {
		$scope.comments.push({
			id: $scope.comments[$scope.comments.length - 1].id + 1,
			body: $scope.comment,
			upvotes: 0
		});

		storageCommentInit();
		$scope.comment = '';
	};

	//отрефакторить
	$scope.upVoteComment = function(comment) {
		let voteCommentObj = JSON.parse(localStorage.getItem('isCommentLiked'));

		if (voteCommentObj[comment.id] == 1) {
			comment.upvotes -= 1;
			voteCommentObj[comment.id] = 0;
			localStorage.setItem('isCommentLiked', JSON.stringify(voteCommentObj));
		} else if ( voteCommentObj[comment.id] == 0 ) {
			comment.upvotes += 1;
			voteCommentObj[comment.id] = 1;
			localStorage.setItem('isCommentLiked', JSON.stringify(voteCommentObj));
		};
	};

	function storageCommentInit() {
		if (localStorage.getItem('isCommentLiked')) {
			isCommentLiked = JSON.parse(localStorage.getItem('isCommentLiked'));
		};

		for (let i = 0; i < $scope.comments.length; i++) {
			if (isCommentLiked[i] === undefined) {
				isCommentLiked[i] = 0;
			}
		};
		console.log(isCommentLiked);
		localStorage.setItem('isCommentLiked', JSON.stringify(isCommentLiked));
	};
}]);