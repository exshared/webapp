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
                templateUrl: template,
                controller: 'OptionsController',
                targetEvent: $event
            });
        };
    };

    function OptionsController($scope, $mdDialog, $mdBottomSheet, Auth, User){

        if(Auth.userLogged()){

            User.me().then(function(data){
                $scope.user = data;
            });

            $scope.items = [
                { name: 'Agregar proyecto', icon: 'border-color' },
                { name: 'Cerrar Sesión', icon: 'key-remove' }
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

                    Auth.logout();
                }
            }
        }
        else{

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
        }




    };
})();
