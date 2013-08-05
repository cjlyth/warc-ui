(function () {
  "use strict";
  var dependencies = [
              'ui.utils',
              'ui.state',
              'placeholders',
              'ui.bootstrap',
              'warcUI.filters', 
              'warcUI.services', 
              'warcUI.directives', 
              'warcUI.controllers'];

  var module = angular.module('warcUI', dependencies);

  module.config(['$stateProvider', '$urlRouterProvider', 
        function(stateProvider, urlRouterProvider) {
    
    urlRouterProvider.otherwise("/");

    stateProvider.state('overview', {
      url: "/"
    });
    stateProvider.state('collect', {
      url: "/collect"
    });
    stateProvider.state('replay', {
      url: "/replay"
    });
    stateProvider.state('preferences', {
      url: "/prefs"
    });
  }]);
}());
