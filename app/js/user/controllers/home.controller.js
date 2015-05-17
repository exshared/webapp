(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .controller('HomeController', HomeController);

    function HomeController($scope, Project){

        $scope.projects = [];
        getProjects();

        function getProjects(){

            Project.getList().then(function(data){
                $scope.projects = data;
            })
        };
    };
})()
