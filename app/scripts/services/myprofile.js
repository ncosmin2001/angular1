wApp.service('myprofileService', function ($http) {
    
    this.getUserSkills = function (user_data,callBack) {
        $http({
            url: '/ws/myprofile.php',
            method: 'POST',
            data: user_data,
            headers: { 'Content-Type': 'application/json' }
        }).success(function(data){
            return callBack(data);
        }).error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };
    
    this.updateUserSkill = function(user_data){
        $http({
            url: '/ws/myprofile.php?update=1',
            method: 'POST',
            data: user_data,
            headers: { 'Content-Type': 'application/json' }
        }).success(function(data,callBack){
            return callBack(data);
        }).error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

});

