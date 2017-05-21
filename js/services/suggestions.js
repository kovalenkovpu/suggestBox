app.factory('suggestions', [function(){
	let demoSuggestions = {
		posts: [
			{
				id: 0,
				title: 'Free pizza at club meetings',
				upvotes: 15,
				comments: [
					{
						body: 'Нереально!',
						upvotes: 0
					}, {
						body: 'Bravo!',
						upvotes: 0
					}, {
						body: 'Неинтересно...',
						upvotes: 0
					}
				]
			},
			{
				id: 1,
				title: 'End all club emails with Laffy Taffy jokes',
				upvotes: 9,
				comments: [
					{
						body: '',
						upvotes: 0
					}, {
						body: '',
						upvotes: 0
					}, {
						body: '',
						upvotes: 0
					}
				]
			},
			{
				id: 2,
				title: 'Retrofit water fountain with Gatorade',
				upvotes: 7,
				comments: [
					{
						body: '',
						upvotes: 0
					}, {
						body: '',
						upvotes: 0
					}, {
						body: '',
						upvotes: 0
					}
				]
			},
			{
				id: 3,
				title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
				upvotes: 3,
				comments: [
					{
						body: '11111',
						upvotes: 0
					}, {
						body: '22222',
						upvotes: 0
					}, {
						body: '33333',
						upvotes: 0
					}
				]
			},
			{
				id: 4,
				title: 'Elon Musk strikes oil lobby!',
				upvotes: 30,
				comments: [
					{
						body: '',
						upvotes: 0
					}, {
						body: '',
						upvotes: 0
					}, {
						body: '',
						upvotes: 0
					}
				]
			},
			]
	};
	return demoSuggestions;
}]);