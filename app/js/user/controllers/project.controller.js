(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .controller('ProjectController', ProjectController);

    function ProjectController($scope, $state, Project, $mdBottomSheet){

        var project = $state.params.id;

        $scope.project = {};
        $scope.fab = fab;

        getProject();

        function fab($event){

            $mdBottomSheet.show({
                templateUrl: 'views/user/project-options.tpl.html',
                controller: 'ProjectOptionsController',
                targetEvent: $event
            });
        };

        function getProject(){

            Project.get(project).then(function(data){
                $scope.project = data;
            });
        }

    };
})()
