'use strict';

require('angular-ui-router');
require('player-component');

angular.element(document).ready(function() {
    var deps = [
    'ui.router',
    'app.component.player'
  ];

  angular.module('app', deps)
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('player', {
            url: '/',
            template: '<player></player>'
          });
      }
    ]);

  angular.bootstrap(document, ['app']);
});
