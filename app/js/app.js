(function(){
    'use strict';

    angular
    .module('exsharer', [
        'ngMaterial', 'ui.router', 'exsharer.templates', 'exsharer.components',
        'exsharer.auth'
        ])

    .config(config)
    .run(run);

    function config($stateProvider){

        $stateProvider

            .state('home', {
                url: '',
                templateUrl: 'views/home.tpl.html'
            });
    };

    function run(){

    };

})();
