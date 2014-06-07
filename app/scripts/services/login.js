wApp.service('loginService', function ($http, $cookies, $location) {
    
    this.login = function (credentials) {
        return $http({
            url: '/app/ws/login.php',
            method: 'POST',
            data: credentials,
            headers: { 'Content-Type': 'application/json' }
        }).success(function(data){
            $cookies.userData = data.logged;
            if(data.logged)
            {
                $cookies.userData = data.idUser;
                $location.path('/profile');
            }
            
            return data;
        });
    };
    
    this.isLogged = function(){
      return $cookies.userData;
    };

});
