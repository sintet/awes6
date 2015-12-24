export default function ChatDirectiveController ($state, $firebaseArray, AuthService) {
  this.state = $state;
  let messagesRef = new Firebase("https://boiling-heat-55.firebaseio.com/" + this.state.params.id + "/messages");
  this.user = AuthService.$getAuth().password.email;
  this.messages = $firebaseArray(messagesRef);
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
ChatDirectiveController.$inject = ["$state","$firebaseArray", "AuthService"];
