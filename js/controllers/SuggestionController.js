app.controller('SuggestionController', ['$scope', 
										'$routeParams', 
										'suggestions', 
										'postComment', 
										'$firebase', function($scope, $routeParams, suggestions, postComment, $firebase) {
	let isCommentLiked = {};

	suggestions.getSuggestions.then(function(data) {
		$scope.posts = data.posts;
		$scope.post = $scope.posts[$routeParams.id];
		//$scope.comments = $scope.post.comments;

		console.dir($scope.posts);
	});
	

	$scope.addComment = function() {
		if (!$scope.comment || $scope.comment === '') return;

		let dataObj = {
			body: $scope.comment,
			upvotes: 0
		};

		postComment.postComment(dataObj, 'https://sg-box.firebaseio.com/data/posts/');

		$scope.comments.push(dataObj);

		//storageCommentInit();
		$scope.comment = '';
	};

	//отрефакторить
	/*$scope.upVoteComment = function(comment) {
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
	};*/
}]);