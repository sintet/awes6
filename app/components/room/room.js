import angular from 'angular';
import uiRouter from 'angular-ui-router';
import roomDirective from './room-directive.js';

import './room.scss';

export default angular.module('room', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('rooms', {
      url: '/rooms',
      template: '<room></room>'
    });
})
.directive('room', roomDirective);
