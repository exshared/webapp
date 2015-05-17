(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .factory('Project', Project);

    function Project($http, api){

        return{

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
