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
  
  wApp.controller('loginCtrl', function ($scope, $location, loginService) {
    $scope.info = {};
    $scope.info.errors = 'dsafsafa';
    
    $scope.credentials = {
        username: '',
        password: ''
    };
    
    if(loginService.isLogged())
    {
        $location.path('/main');
    }
    
    $scope.submit = function(){
        
        $scope.info = loginService.login($scope.credentials).then(function(response){
            return response;
        });

         $scope.credentials = {
            username: '',
            password: ''
        };
    };
    
  });
