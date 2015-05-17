(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .factory('Project', Project);

    function Project($http, api, Auth, headers){

        return{

            get: function(project){

                return $http({
                    method: 'get',
                    url: api.id(api.project, project)
                }).then(function(response){
                    return response.data.data;
                });
            },

            getList: function(){

                return $http({
                    method: 'get',
                    url: api.project
                }).then(function(response){
                    return response.data.data;
                });
            },

            asociateProposal: function(project, proposal){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method: 'put',
                    url: api.id(api.project, project),
                    headers:{
                        Authorization: headers.authorization(tokenType, token)
                    },
                    params:{
                        proposal: proposal
                    }
                }).then(function(response){
                    response.data.data;
                })
            }
        };
    };
})();
