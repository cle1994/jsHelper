var app = angular.module('javascript-helper', ['ui.router', 'ngTouch', 'ngAnimate', 'ui.ace']);

app.run(['$rootScope', '$state', '$location', '$window', function ($rootScope, $state, $location, $window) {
    $rootScope.$state = $state;
}]);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html'
        })
        .state('testing', {
            abstract: true,
            url: '/testing',
            templateUrl: './views/testing.html'
        })
            .state('testing.cases', {
                url: '/:params',
                templateUrl: './views/test.html'
            });
}]);