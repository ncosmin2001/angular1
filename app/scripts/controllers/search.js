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
     $http.get('/p5skills/ws/repos/skillsRepo.php').success(function(data) {
       $scope.skills = data;
     });
 
     $scope.showSkills = false;
     $scope.showSkillsList = function(){
         $scope.showSkills = true;
     };
     
     $scope.orderProp = 'name';
     $scope.keyPressed = function(event){
         switch(event.which)
         {
             case 40://arrow down
                 if($("ul.skills>li.select").length==0)
                 {
                     $("ul.skills>li:first").addClass("select");
                     
                 }else{
                     if($("ul.skills>li.select").index() == ($("ul.skills>li").length-1)){
                        $("ul.skills>li.select").removeClass("select");
                        $("ul.skills>li").first().addClass("select");                       
                     }else{
                        $("ul.skills>li.select").removeClass("select").next().addClass("select");
                     }
                 }
                 $('#skill_val').val($.trim($("ul.skills>li.select").html()));
                 break;
             case 38://arrow up
                 if($("ul.skills>li.select").length==0)
                 {
                     $("ul.skills>li:first").addClass("select");                     
                 }else{
                     if($("ul.skills>li.select").index() == 0){
                        $("ul.skills>li.select").removeClass("select");
                        $("ul.skills>li").last().addClass("select");                       
                     }else{
                        $("ul.skills>li.select").removeClass("select").prev().addClass("select");
                     }
                 }
                 $('#skill_val').val($.trim($("ul.skills>li.select").html()));
                 break;
         }
     };
   }]);
