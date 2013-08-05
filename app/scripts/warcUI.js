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
    
    urlRouterProvider.otherwise("/replay");

    stateProvider.state('collect', {
      url: "/collect",
      controller: 'MyCtrl1',
      templateUrl: 'templates/partial1.html'
    });

    stateProvider.state('replay', {
      url: "/replay",
      controller: 'MyCtrl2',
      templateUrl: 'templates/partial2.html'
    });

  }]);
}());
