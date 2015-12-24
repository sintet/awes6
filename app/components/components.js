import angular from 'angular';

import login from './login/login.js';
import room from './room/room.js';
import chat from './chat/chat.js';

export default angular.module('components', [
  login.name,
  room.name,
  chat.name
]);
