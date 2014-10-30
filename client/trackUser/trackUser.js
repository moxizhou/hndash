angular.module('myApp.trackUser', [] )

	.controller('trackUserController', function($scope, linegraph){
		$scope.trackUser = function(user){
			$scope.count = 0;
			$scope.userToTrack;
			$scope.score;
			$scope.userSubmitted;
			$scope.show = false;
			$scope.loading = true;
			$scope.datenow;
			var executing = false;
			var url = "https://hacker-news.firebaseio.com/v0/user/";
			var fullUrl = url.concat(user);
			var hackerNewsRef = new Firebase(fullUrl);
			hackerNewsRef.on('value', function (snapshot) {
				$scope.$apply(function(){
					$scope.count += 1;
					$scope.loading = false;
					$scope.show = true;
					$scope.userSubmitted = snapshot.val().submitted;
					$scope.score = snapshot.val().karma;
					if($scope.count > 1){
						$scope.update = true;
						$scope.updateMessage = "There has been an update to this user";
						setTimeout(function(){
						$scope.update = false;
						}, 20000);
					}
					linegraph.update($scope);
					if (!executing) {
						executing = true;
				  	var offset = -8;
				  	$scope.datenow = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace(/ GMT$/, "") + ' Pacific Time';
				  	executing = true;
						linegraph.link($scope);
				  }
				});
			}, function (errorObject) {
			  console.log('The read failed: ' + errorObject.code);
			});	
		}
});







