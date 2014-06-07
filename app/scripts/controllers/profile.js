'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('ProfileCtrl', function ($scope,$cookies,myprofileService,loginService) {
      
    $scope.setMySkills = function(data){
        $scope.myskills = data;
    };
      
    if(loginService.isLogged())
    {
        myprofileService.getUserSkills({userid:$cookies.userData},$scope.setMySkills);
    }
    
	$scope.allSkill = ['PHP','HTML',"JavaScript","C#","C++","Delphi","Java","AngularJS","NodeJS","Backbone","Simfony","Drupal"];
	
	$scope.editSkill = function(index){
		$scope.myskills[index].edit = true;
	};
	
	$scope.deleteSkill = function(index){
		if(confirm('Do you really want to remove this skill?')){
			$scope.myskills.splice(index,1);
		}		
	};
	
	$scope.updateMySkills = function(){
		myprofileService.updateUserSkill($scope.myskills);
		//commit modifications to server
	};
  });