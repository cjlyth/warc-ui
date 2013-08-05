(function () {
    "use strict";
    var module = angular.module('warcUI.directives', []);
    
    module.directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);
}());
