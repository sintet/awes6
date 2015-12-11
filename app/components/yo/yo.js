
import './yo.styl';

import angular from 'angular';

import YoController from './controllers/yo-controller.js';
import YoService from './services/yo-service.js';
import YoDirective from './directives/yo-directive.js';


export default angular.module('yo', [] )
	.controller('yoController', YoController)
	.service('yoService', YoService)
	.directive('yoDirective',  YoDirective);
