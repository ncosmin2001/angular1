wApp.service('loginService', function ($http) {
    
    this.login = function (credentials) {
        $http({
            url: '/workshop/ws/login.php',
            method: 'POST',
            data: credentials,
            headers: { 'Content-Type': 'application/json' }
        }).success(function(data){
            return data;
        });
       /* $http.post('/workshop/ws/login.php', credentials).success(function(data){
            return data;
        });*/
    };

});
