
import chatTemplate from "./chat.html";
// import ChatController from './chat-controller.js';

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

function ChatDirectiveController ($state, $firebaseArray, $firebaseAuth){
  this.state = $state;
  let newRef = new Firebase("https://boiling-heat-55.firebaseio.com/" + this.state.params.id + "/messages");
  let ref = new Firebase("https://boiling-heat-55.firebaseio.com/");
  this.auth = $firebaseAuth(ref);
  this.user = this.auth.$getAuth().password.email;
  this.messages = $firebaseArray(newRef);

}

ChatDirectiveController.prototype.sendMessage = function (){
  if(this.messageText){
    this.messages.$add({
        from : this.user,
        body: this.messageText
    });
    this.messageText = "";
  }
};
ChatDirectiveController.prototype.leaveThisRoom = function(){

};
ChatDirectiveController.prototype.addMessageClass = function(){

};
ChatDirectiveController.$inject = ["$state","$firebaseArray", "$firebaseAuth"];
