app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
		$scope.posts = suggestions.posts;
		$scope.post = $scope.posts[$routeParams.id];
		$scope.comments = $scope.post.comments;

		$scope.addComment = function() {
			$scope.comments.push({
				body: $scope.comment,
				upvotes: 0
			});
		};

		$scope.upVoteComment = function(comment) {
			comment.upvotes += 1;
		};
}]);