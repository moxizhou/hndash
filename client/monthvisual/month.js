// x-axis: time of day; (can sort by day, hour within day, etc, interactive)
// y-axis: total posts;
// bubble size: proportion of viral posts = # of people with 100+points/total posts

angular.module('myApp.month', [])
	.controller('monthController', function($scope, maxFactory) {
		$scope.loading = false;
		$scope.date = {};
		$scope.searchMonth = function() {
			$scope.loading = true;
			maxFactory.maxPost();
		};
	})
	.factory('maxFactory', function($http) {
		var timeConverter = function(unix){
		  var a = new Date(unix*1000);
		  // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		  // var year = a.getFullYear();
		  // var month = months[a.getMonth()];
		  var date = a.getDate();
		  var hour = a.getHours();
		  var min = a.getMinutes();
		  // var sec = a.getSeconds();
		  var time = date + ' ' + hour + ' ' + min;
		  return time;
		};
		var maxPost = function() {
			$http({
				method: 'GET',
				url: 'https://hacker-news.firebaseio.com/v0/maxitem.json',
			}).success(function(max) {
				console.log(max);
				for ( var i = max - 300; i < max + 1; i++ ) {
					$http({
						method: 'GET',
						url: 'https://hacker-news.firebaseio.com/v0/item/' + i + '.json',
					}).success(function(post) {
						if (post.score) {
							console.log(timeConverter(post.time));
						}
					});
				};
			});
		};

		return {
			maxPost: maxPost
		}

	});