(function () {
    "use strict";
    var serviceModule = angular.module('warcUI.services', ['ngResource']);


    serviceModule.factory('configResource', ["$resource",
        function(resource) {
            var endpointResource =  resource('/api/config/:action',{
                action: '_find'
            });
            return endpointResource;
        }
    ]);
}());
