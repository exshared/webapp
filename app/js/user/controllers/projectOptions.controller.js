(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .controller('ProjectOptionsController', UserOptionsController);

    function UserOptionsController($scope, $mdDialog){

        $scope.items = [
            { name: 'Propuesta', icon: 'pencil-box' },
            { name: 'Pregunta', icon: 'help' },
            { name: 'Información', icon: 'information' },
            { name: 'Compartir', icon: 'share-variant' },
        ];

        $scope.actions = function($event, $index){

            if($index == 0){

                $mdDialog.show({
                    templateUrl: 'views/user/addProposal.tpl.html',
                    clickOutsideToClose: true,
                    focusOnOpen: true,
                    targetEvent : $event
                });

            }
            if($index == 1){

                $mdDialog.show({
                    templateUrl: 'views/user/addAnswer.tpl.html',
                    clickOutsideToClose: true,
                    focusOnOpen: true,
                    targetEvent : $event
                });

            }
            if($index == 2){

            }
            if($index == 3){

            }
        };

    };
})();
