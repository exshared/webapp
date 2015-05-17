(function(){
    'use strict';

    angular
        .module('exsharer.auth')
        .controller('LoginController', LoginController);

    function LoginController($scope, Auth){

        $scope.login = function(user){
            Auth.password(user.username, user.password).then(function(data){
                console.log(data);
            });
        };
    };

})();
