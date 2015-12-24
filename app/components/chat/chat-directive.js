
import chatTemplate from "./chat.html";
import ChatDirectiveController from './chat-controller.js';
import ChatService from './chat-service.js';

export default function LoginDirective() {

  return {
      template : chatTemplate,
      restrict : 'E',
      scope : {},
      controller : ChatDirectiveController,
      controllerAs : 'chatCtrl',
      bindToController : true,
  };
}
