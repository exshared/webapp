(function(){
    'use strict';

    angular
        .module('exsharer.components')
        .directive('exMenu', exMenu);

        function exMenu(){

            return{
                restrict: 'EA',
                transclude: true,
                templateUrl: 'views/components/ex-menu.tpl.html',
                scope: {
                    title: '@',
                    size: '@'
                },
                controller: 'ExMenuController'
            };
        };
})();
