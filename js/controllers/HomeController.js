app.controller('HomeController', ['$scope',
									'$routeParams', 
									'$http', 
									'suggestions', 
									'postSuggestion',
									'firebase', function($scope, $routeParams, $http, suggestions, postSuggestion, firebase) {
	let isLiked = {};

	//injecting firebase module there's no need
	//in GET and POST services
	/* TO-DO
	[ ] - заменить сервисы на прямую работу с firebase DB
	[ ] - разобраться с комментариями для постов (получение доступа по ключу поста)
	*/
	let fb = firebase.database();

	//добавляет eventListener на изменения в базе по указанной
	//в .ref() ссылке
	fb.ref('/data/posts/').on('value', function(snapshot) {
  		$scope.posts = snapshot.val();
	});

	// suggestions.getSuggestions.then(function(data) {
	// $scope.posts = data.posts;
	// storageInit();
	// });
	
	$scope.addSuggestion = function() {

		if (!$scope.title || $scope.title === '') return;

		let dataObj = {
			title: $scope.title,
			upvotes: 0,
			comments: []
		};

		//postSuggestion.postSuggestion(dataObj);

		fb.ref('/data/posts/').push(dataObj);
				
		//$scope.posts.push(dataObj);
		//storageInit();
		$scope.title = '';
	};

/*	$scope.upVote = function(post) {
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
	};*/

/*	function storageInit() {
		if (localStorage.getItem('isLiked')) {
			isLiked = JSON.parse(localStorage.getItem('isLiked'));
		};

		for (let i = 0; i < $scope.posts.length; i++) {
			if (isLiked[i] === undefined) {
				isLiked[i] = 0;
			}
		};
		
		localStorage.setItem('isLiked', JSON.stringify(isLiked));
	};*/
}]);