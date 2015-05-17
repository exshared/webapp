(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .controller('ProjectOptionsController', UserOptionsController);

    function UserOptionsController($scope){

        $scope.items = [
            { name: 'Propuesta', icon: 'pencil-box' },
            { name: 'Pregunta', icon: 'help' },
            { name: 'Información', icon: 'information' },
            { name: 'Compartir', icon: 'share-variant' },
        ];

    };
})();
