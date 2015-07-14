var recruitmentApp = angular.module('recruitmentApp', ['ngRoute', 'ngResource']);

// configure our routes
recruitmentApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'templates/login.html',
            controller  : 'loginController'
        })

        // route for the about page
        .when('/dashboard', {
            templateUrl : 'templates/dashboard.html',
            controller  : 'dashboardController'
        })

        // route for the contact page
        .when('/projects', {
            templateUrl : 'templates/projects.html',
            controller  : 'projectsController'
        });
});

// create the controller and inject Angular's $scope
recruitmentApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});