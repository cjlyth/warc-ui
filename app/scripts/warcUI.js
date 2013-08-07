(function () {
  "use strict";
  // 'ui.utils','placeholders',
  var dependencies = [
              'ui.state',
              'ui.bootstrap',
              'warcUI.filters', 
              'warcUI.services', 
              'warcUI.directives', 
              'warcUI.controllers'];

  var module = angular.module('warcUI', dependencies);

module.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

  module.config(['$stateProvider', '$urlRouterProvider', 
        function(stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise("/");
    stateProvider.state('overview', { 
      url: '/' ,
      templateUrl: '/templates/overview.html'
    });
    stateProvider.state('collect', { url: '/collect/:id' });
    stateProvider.state('replay', { url: '/replay/:id' });
    stateProvider.state('prefs', { url: '/prefs/' });
    stateProvider.state('exit', { url: '/exit' });
    
    stateProvider.state('config', {
      url: '/config/:id',
      
      views: {
        'detail': {
          templateUrl: '/templates/config-detail.html',
          controller: 'ConfigDetailCtrl'
        },
        'list': {
          templateUrl: '/templates/config-list.html',
          controller: 'ConfigListCtrl'
        }
      }
    });
    // stateProvider
    //   .state('config', {
    //     abstract: true, 
    //     url: '/config',
    //     controller: 'ConfigCtrl',
    //     template: '<div ui-view/>',
    //     onEnter: function(){
    //       console.log("enter config");
    //     }
    //   })
    //   .state('config.list', {
    //     url: '/list',
    //     templateUrl: '/templates/config-list.html',
    //     controller: 'ConfigListCtrl',
    //     onEnter: function(){
    //       console.log("enter config.list");
    //     }
    //   })
    //   .state('config.detail', {
    //     url: '/:id',
    //     templateUrl: '/templates/config-detail.html',
    //     controller: 'ConfigDetailCtrl',
    //     onEnter: function(){
    //       console.log("enter config.detail");
    //     }
    //   })
    //   ;
  }]);

module.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
}());
