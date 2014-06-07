'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workshopApp
 */
  wApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  
  wApp.controller('loginCtrl', function ($scope, loginService) {
      
    $scope.logged = false;
    $scope.info = {};
    
    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.submit = function(){
        $scope.info = loginService.login($scope.credentials);
        $scope.logged = $scope.info.logged;
    };
    
    
  });
