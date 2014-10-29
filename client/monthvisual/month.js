// x-axis: time of day; (can sort by day, hour within day, etc, interactive)
// y-axis: total posts;
// bubble size: proportion of viral posts = # of people with 100+points/total posts

angular.module('myApp.month', [])
	.controller('monthController', function($scope, $http) {
		$scope.loading = false;
		console.log("in HERE");
		var url = "https://hacker-news.firebaseio.com/v0";
		$scope.searchMonth = function() {
			$scope.loading = true;
			console.log("blahhh")
			$http({
					method: 'GET',
					url: url + "/item/",
				}).success(function(posts) {
					posts.slice(0,10);
					console.log(posts);
				});
		}
	})
	.factory('monthFactory', function() {
	});