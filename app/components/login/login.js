import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginDirective from './login-directive.js';
import AuthService from '../auth/auth-service.js';
import './login.scss';

export default angular.module('login', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    });
})
.factory('AuthService', AuthService)
.directive('login', loginDirective);
