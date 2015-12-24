import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';
import 'main.scss';

import firebase from 'firebase';
import angular from 'angular';
import angularfire from'angularfire';
import uiRouter from 'angular-ui-router';

import components from './components/components.js';

angular.module('awes6', ['components', 'firebase'])

.config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/login');
});

angular.bootstrap(document, ['awes6']);
