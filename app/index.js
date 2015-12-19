import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';

import firebase from 'firebase';
import angular from 'angular';
import angularfire from'angularfire';
import uiRouter from 'angular-ui-router';

const firebaseRef = new Firebase("https://boiling-heat-55.firebaseio.com/");

import yo from './components/yo/yo.js';

angular.module('awes6', ['yo']);

angular.bootstrap(document, ['awes6']);
