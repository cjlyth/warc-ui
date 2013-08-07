(function () {
    "use strict";
    var controllerModule = angular.module('warcUI.controllers', 
                                          ['ui.state', 'warcUI.services']);

    controllerModule.controller('ConfigDetailCtrl', 
    ['$scope', 'configResource', '$stateParams', 
    function(scope, configResource, stateParams) {
        if (stateParams && stateParams.id) {
            configResource.get({ 
                'criteria': '{"_id":{"$oid":"' + stateParams.id + '"}}'
            }).$then(function(d){
                console.log('one: ', d);
                scope.config = d;
            });            
        }
    }]);
    controllerModule.controller('ConfigListCtrl', 
            ['$scope', 'configResource', 
    function(scope, configResource) {
        console.log('configResource',configResource);
        configResource.get().$then(function(d){
            console.log('list: ', d);
            scope.configs = d;
        });
    }]);
}());
