(function(){
    'use strict';

    angular
    .module('exsharer', [
        'ngMaterial', 'ui.router', 'exsharer.templates', 'exsharer.components',
        'exsharer.auth', 'exsharer.user'
        ])

    .config(config)
    .run(run);

    function config($mdIconProvider, $locationProvider){

        //icons
        $mdIconProvider
            .icon('account-plus', 'img/icons/account-plus.svg', 24)
            .icon('account-multiple-plus', 'img/icons/account-multiple-plus.svg', 24)
            .icon('account', 'img/icons/account.svg', 24)
            .icon('facebook', 'img/icons/facebook.svg', 24)
            .icon('menu', 'img/icons/menu.svg', 24)
            .icon('more_vert', 'img/icons/more_vert.svg', 24)
            .icon('key', 'img/icons/key.svg', 24);

    };

    function run(){

    };

})();
