(function(){
    'use strict';

    angular
        .module('exsharer.user', ['ui.router', 'angularReverseGeocode'])
        .config(config)
        .run(run);

    function config($stateProvider){

        $stateProvider

            .state('home', {
                url: '',
                templateUrl: 'views/user/home.tpl.html',
                controller: 'HomeController'
            })
            .state('project', {
                url: 'project/:id',
                templateUrl: 'views/user/project.tpl.html',
                controller: 'ProjectController'
            });
    };

    function run(){

    };

})();
