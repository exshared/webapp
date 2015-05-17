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
            .icon('plus', 'img/icons/plus.svg', 24)
            .icon('account-network', 'img/icons/account-network.svg', 24)
            .icon('share-variant', 'img/icons/share-variant.svg', 30)
            .icon('information', 'img/icons/information.svg', 30)
            .icon('human', 'img/icons/human.svg', 30)
            .icon('pencil-box', 'img/icons/pencil-box.svg', 30)
            .icon('help', 'img/icons/help.svg', 30)
            .icon('heart', 'img/icons/heart.svg')
            .icon('border-color', 'img/icons/border-color.svg')
            .icon('key-remove', 'img/icons/key-remove.svg')
            .icon('key', 'img/icons/key.svg', 24);

    };

    function run(){

    };

})();
