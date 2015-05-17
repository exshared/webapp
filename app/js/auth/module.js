(function(){
    'use strict';

    angular
        .module('exsharer.auth', ['ui.router', 'LocalStorageModule'])
        .config(config)
        .run(run);

    function config(){

    };

    function run($rootScope, Auth){

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams){

            console.log('khé');

       });

    };

})();
