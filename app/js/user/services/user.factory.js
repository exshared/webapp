(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .factory('User', User);

    function User($http, Auth, api, headers){

        return{

            me: function(){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token

                return $http({
                    method: 'get',
                    url: api.user + '/me',
                    headers:{
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(response){
                    return response.data.data;
                });
            }
        }
    };
})();
