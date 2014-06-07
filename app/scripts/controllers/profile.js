'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.myskills = [
      { skillName: 'PHP', skillLvl:'3',edit:false},
      { skillName: 'AngularJS', skillLvl:'4',edit:false},
	  { skillName: 'JQuery', skillLvl:'4',edit:false},
	  { skillName: 'HTML', skillLvl:'2',edit:false},
	  { skillName: 'Javascript', skillLvl:'5',edit:false}
    ];
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
		for(var i=0;i<$scope.myskills.length; i++){
			$scope.myskills[i].edit = false;
		}
		//commit modifications to server
	};
  });