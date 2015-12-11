/*jshint esnext: true */

import './main.styl';

import componentHandler from 'material-design-lite/material';

import angular from 'angular';

import yo from './components/yo/yo.js';



angular.module('awes6', ['yo']);

angular.bootstrap(document, ['awes6']);
