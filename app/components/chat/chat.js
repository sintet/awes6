import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chatDirective from './chat-directive.js';
import AuthService from '../auth/auth-service.js';
import './chat.scss';

export default angular.module('chat', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('chat', {
      url: '/chat/:id',
      template: '<chat></chat>'
    });
})
.factory('AuthService', AuthService)
.directive('chat', chatDirective);
