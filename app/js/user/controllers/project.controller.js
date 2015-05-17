(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .controller('ProjectController', ProjectController);

    function ProjectController($scope, $state, Project){

        var project = $state.params.id;

        $scope.project = {};

        getProject();

        function getProject(){
            Project.get(project).then(function(data){
                $scope.project = data;
                console.log(data);
            });
        }

    };
})()
