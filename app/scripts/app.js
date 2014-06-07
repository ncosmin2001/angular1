'use strict';

/**
 * @ngdoc overview
 * @name workshopApp
 * @description
 * # workshopApp
 *
 * Main module of the application.
 */
var wApp = angular.module('workshopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
	  .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
	  .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]).run( function($rootScope, $location, loginService, $cookies) {

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if(!loginService.isLogged())
      {
          $location.path( "/" );
      }  
    });
 });
