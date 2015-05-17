(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .factory('Proposal', Proposal);

    function Proposal($http, Auth, api, headers){

        return{

            add: function(proposal){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.proposal,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    },
                    data: proposal
                }).then(function(response){
                    return response.data.data;
                });

            }
        };
    };

})()
