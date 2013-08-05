(function () {
    "use strict";
    var controllerModule = angular.module('warcUI.controllers', ['ui.state']);

    controllerModule.controller('MainCtrl', ['$state', function(state) {
        console.log('MainCtrl');
    }]);

    controllerModule.controller('ConfigCtrl', 
    ['$scope', function(scope) {
        console.log('ConfigCtrl');
        scope.configs = [
            {id: 0, label: "one"},
            {id: 1, label: "two"},
            {id: 2, label: "three"},
            {id: 3, label: "four"}
        ];
    }]);
    controllerModule.controller('ConfigDetailCtrl', 
    ['$scope', '$stateParams', function(scope, stateParams) {
        console.log('ConfigDetailCtrl');
        scope.config = scope.configs[stateParams.id];

    }]);
    controllerModule.controller('ConfigListCtrl', 
    ['$scope', function(scope) {
        console.log('ConfigListCtrl');

    }]);

}());
