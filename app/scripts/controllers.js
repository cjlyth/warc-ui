(function () {
    "use strict";
    var controllerModule = angular.module('warcUI.controllers', []);
    controllerModule.controller('MyCtrl1', [function() {
        console.log('MyCtrl1');
    }]);
    controllerModule.controller('MyCtrl2', [function() {

    }]);
}());
