var app = angular.module('myApp', [
  "ui.router",
  "myApp.main",
  "myApp.top100visual",
  "myApp.search",
  "firebase",
  "d3",
  "myApp.directives",
  "myApp.directivegraph",
  "myApp.trackUser",
  "myApp.trackPost",
  "myApp.home",
  "myApp.month"
  ]);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'main/main.html',
      controller: 'mainController'
    })
    .state('search', {
      parent:'main',
      url: '/search',
      templateUrl: 'search/search.html',
      controller: 'searchCtrl'
    })
    .state('top100visual', {
      parent:'main',
      url: '/top100visual',
      controller: 'top100visualController',
      templateUrl: 'top100visual/top100visual.html'
    })
    .state('trackUser', {
      parent:'main',
      url: '/trackUser',
      controller: 'trackUserController',
      templateUrl: 'trackUser/trackUser.html'
    })
    .state('home', {
      parent:'main',
      url: '/home',
      templateUrl: 'home/home.html',
      controller: 'homeController'
    })
    .state('trackPost', {
      parent:'main',
      url: '/trackPost',
      templateUrl: 'trackPost/trackPost.html',
      controller: 'trackPostController'
    })
    .state('monthvisual', {
      parent:'main',
      url: '/month',
      templateUrl: 'monthvisual/month.html',
      controller: 'monthController'
    });
        
  $urlRouterProvider.otherwise("/main/home");
});
