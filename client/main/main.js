angular.module('myApp.main', [] )

.controller('mainController', ['$scope', '$state', function($scope, $state) {
	$state.transitionTo('main');

}]);

