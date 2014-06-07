'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workshopApp
 */
    wApp.controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  
 

//    wApp.controller('controller1', ['$scope', '$http',
//  function ($scope, $http) {
//    $http.get('/angular1/ws/repos/skillsRepo.php').success(function(data) {
//      $scope.phones = data;
//    });
//
//    $scope.orderProp = 'placeName';
//  }]);
//  
  'use strict';
 
 /**
 + * @ngdoc function
 + * @name app1.controller:controller1
 + * @description
 + * # controller1
 + * Controller of the app1
  */
 
 wApp.controller('controller1', ['$scope', '$http',
   function ($scope, $http,$event) {
     $http.get('/angular1/ws/repos/skillsRepo.php').success(function(data) {
       $scope.phones = data;
     });
 
     $scope.orderProp = 'name';
     $scope.keyPressed = function(event){
         switch(event.which)
         {
             case 40://arrow down
                 //obSelected = $("ul.phones>li.select");
                 if($("ul.phones>li.select").length==0)
                 {
                     $("ul.phones>li:first").addClass("select");
                     
                 }else{
                     if($("ul.phones>li.select").index() == ($("ul.phones>li").length-1)){
                        $("ul.phones>li.select").removeClass("select");
                        $("ul.phones>li").first().addClass("select");                       
                     }else{
                        $("ul.phones>li.select").removeClass("select").next().addClass("select");
                     }
                 }
                 $('#skill_val').val($.trim($("ul.phones>li.select").html()));
                 break;
             case 38://arrow up
                 //obSelected = $("ul.phones>li.select");
                 if($("ul.phones>li.select").length==0)
                 {
                     $("ul.phones>li:first").addClass("select");                     
                 }else{
                     if($("ul.phones>li.select").index() == 0){
                        $("ul.phones>li.select").removeClass("select");
                        $("ul.phones>li").last().addClass("select");                       
                     }else{
                        $("ul.phones>li.select").removeClass("select").prev().addClass("select");
                     }
                 }
                 $('#skill_val').val($.trim($("ul.phones>li.select").html()));
                 break;
         }
         console.log(event);
     };
   }]);
