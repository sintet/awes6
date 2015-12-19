import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import homeComponent from './home.component';

let homeModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<login></login>'
    });
})

.directive('login', homeComponent);

export default homeModule;
