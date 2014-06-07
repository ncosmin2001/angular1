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
      if($cookies.userData == 'true' || $cookies.userData== true)
      {
          return true;
      }
      else
      {
          return false;
      }
    };
    
    this.logOut = function(){
      $cookies.userData = false;
      $location.path('/');
    };
    
    this.getUserData = function(){
      return $http({
            url: '/workshop/ws/login.php',
            method: 'get'
        }).success(function(data){
            if(data.logged)
            {
                $location.path('/main');
            }
            return data;
        });  
    };

});
