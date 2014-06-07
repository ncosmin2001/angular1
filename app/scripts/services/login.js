wApp.service('loginService', function ($http, $cookies, $location) {
    
    this.login = function (credentials) {
        return $http({
            url: '/workshop/ws/login.php',
            method: 'POST',
            data: credentials,
            headers: { 'Content-Type': 'application/json' }
        }).success(function(data){
            if(data.logged)
            {
                $location.path('/main');
            }
            $cookies.userData = data.logged;
            return data;
        });
    };
    
    this.isLogged = function(){
      return $cookies.userData;
    };

});
