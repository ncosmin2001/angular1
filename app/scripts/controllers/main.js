'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workshopApp
 */
  wApp.controller('MainCtrl', function ($scope, loginService) {
    loginService.getUserData().then(function(response){
        $scope.info =  response.data;
    });
    
    $scope.logout = function(){
        loginService.logOut();
    };
  });
  
  wApp.controller('loginCtrl', function ($scope, $location, loginService, $log) {
    $scope.info = {};
    
    $scope.credentials = {
        username: '',
        password: ''
    };
    
    if(loginService.isLogged())
    {
        $location.path('/main');
    }

    $scope.submit = function(){
        loginService.login($scope.credentials).then(function(response){
            $scope.info =  response.data;
        });
        
         $scope.credentials = {
            username: '',
            password: ''
        };
    };
    
  });
