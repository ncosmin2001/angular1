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
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
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
