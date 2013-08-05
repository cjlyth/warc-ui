(function () {
    "use strict"; 
    var module = angular.module('warcUI.filters', []);
    module.filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);
}());

