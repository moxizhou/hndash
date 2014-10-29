// x-axis: time of day; (can sort by day, hour within day, etc, interactive)
// y-axis: total posts;
// bubble size: proportion of viral posts = # of people with 100+points/total posts

angular.module('myApp.month', [])
	.controller('monthController', function($scope, maxFactory) {
		$scope.loading = false;
		$scope.searchMonth = function() {
			$scope.loading = true;
			maxFactory.maxPost();
		};
	})
	.factory('maxFactory', function($http) {
		var maxPost = function() {
			$http({
				method: 'GET',
				url: "https://hacker-news.firebaseio.com/v0/maxitem.json",
			}).success(function(max) {
				console.log(max);
			});
		};

		return {
			maxPost: maxPost
		}

	});