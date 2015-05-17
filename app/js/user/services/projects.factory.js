(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .factory('Project', Project);

    function Project($http, api){

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
            }
        };
    };
})();
