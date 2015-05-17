(function(){
    'use strict';

    angular
    .module('exsharer', [
        'ngMaterial', 'ui.router', 'exsharer.templates', 'exsharer.components',
        'exsharer.auth'
        ])

    .config(config)
    .run(run);

    function config($stateProvider, $mdIconProvider){

        //icons

        $mdIconProvider
            .icon('account-plus', 'img/icons/account-plus.svg', 24)
            .icon('account-multiple-plus', 'img/icons/account-multiple-plus.svg', 24)
            .icon('account', 'img/icons/account.svg', 24);

        $stateProvider

            .state('home', {
                url: '',
                templateUrl: 'views/home.tpl.html'
            });
    };

    function run(){

    };

})();
