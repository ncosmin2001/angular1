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

'use strict';

/**
 * @ngdoc function
 * @name app1.controller:controller1
 * @description
 * # controller1
 * Controller of the app1
 */

wApp.controller('controller1', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/placesproject/web/app_dev.php/placesnames').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'placeName';
  }]);
  
  
