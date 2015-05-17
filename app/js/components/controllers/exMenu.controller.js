(function(){
    'use strict';

    angular
        .module('exsharer.components')
        .controller('ExMenuController', ExMenuController)
        .controller('OptionsController', OptionsController);

    function ExMenuController($scope, $mdBottomSheet, Auth){

        $scope.options = function($event){

            var base = 'views/components/options-';
            var template = Auth.userLogged() ? base + 'auth' : base + 'no-auth';
            template = template + '.tpl.html';

            $mdBottomSheet.show({
                templateUrl: 'views/components/options-no-auth.tpl.html',
                controller: 'OptionsController',
                targetEvent: $event
            });
        };

        $scope.isAuth = Auth.userLogged;
    };

    function OptionsController($scope, $mdDialog, $mdBottomSheet){

        $scope.items = [
            { name: 'Iniciar Sesión', icon: 'account' },
            { name: 'Registrarse', icon: 'account-multiple-plus' }
        ];

        $scope.action = function(index, $event){

            $mdBottomSheet.hide()

            if(index == 0){

                $mdDialog.show({
                    controller: 'LoginController',
                    templateUrl: 'views/auth/login.tpl.html',
                    clickOutsideToClose: true,
                    focusOnOpen: true,
                    targetEvent : $event
                });
            }
            if(index == 1){

                $mdDialog.show({
                    controller: 'SingupController',
                    templateUrl: 'views/auth/singup.tpl.html',
                    clickOutsideToClose: true,
                    focusOnOpen: true,
                    targetEvent : $event
                });
            }
        }
    };
})();
