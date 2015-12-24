
import loginTemplate from "./login.html";
import LoginDirectiveController from './login-controller.js';

export default function LoginDirective() {
  return {
    template : loginTemplate,
    restrict : 'E',
    scope : {},
    controller : LoginDirectiveController,
    controllerAs : 'loginCtrl',
    bindToController : true,
  };
}
