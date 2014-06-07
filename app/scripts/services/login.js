wApp.service('loginService', function ($http, $rootScope) {
    
    this.login = function (credentials) {
        $http({
            url: '/workshop/ws/login.php',
            method: 'POST',
            data: credentials,
            headers: { 'Content-Type': 'application/json' }
        }).success(function(data){
            $rootScope.loggedUser = data;
            return $rootScope;
        });
    };

});
