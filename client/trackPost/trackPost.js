/*jshint -W004 */

angular.module('myApp.trackPost', [] )

	.controller('trackPostController', function($scope){
		$scope.trackPost = function(){
			$scope.postToTrack;
			$scope.postAuthor = '';
			$scope.createdAt = '';
			$scope.title = '';
			$scope.score = '';
			$scope.comments = '';
			$scope.loading = true;
			$scope.show = false; 
			var url = "https://hacker-news.firebaseio.com/v0/item/";
			var postId = $scope.postToTrack;
			var postRef = new Firebase(url + postId);
			// Attach an asynchronous callback to read the data at our post reference
			postRef.on('value', function (snapshot) {
			  console.log(snapshot.val());
			  $scope.$apply(function(){
				  $scope.loading = false;
					$scope.show = true; 
				  $scope.postAuthor = snapshot.val().by;
				  var time = snapshot.val().time;
				  var date = new Date(0);
				  $scope.createdAt = date.setUTCSeconds(time);
				  $scope.score = snapshot.val().score;
				  $scope.title = snapshot.val().title;
				  $scope.comments = snapshot.val().kids.length;
				});
			}, function (errorObject) {
			  console.log('The read failed: ' + errorObject.code);
			});
		}

	});


