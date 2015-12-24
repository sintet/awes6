
import roomTemplate from "./room.html";
// import RoomController from './room-controller.js';

export default function RoomDirective() {
  return {
    template : roomTemplate,
    restrict : 'E',
    scope : {},
    controller : RoomDirectiveController,
    controllerAs : 'roomCtrl',
    bindToController : true,
  };
}

function RoomDirectiveController ($state, $firebaseArray, $firebaseAuth){

  this.state = $state;
  let ref = new Firebase("https://boiling-heat-55.firebaseio.com/");
  this.rooms = $firebaseArray(ref);
  this.auth = $firebaseAuth(ref);
  this.user = this.auth.$getAuth().password.email;

  this.newRoomName = "";
}
RoomDirectiveController.prototype.getParticipants = function (room) {
  return room.participants.join(", ");
};

RoomDirectiveController.prototype.createARoom = function (id) {
  if(this.newRoomName){
    this.entryMessage =   {
        from: this.user,
        body: this.user + " create this room"
    };
    this.rooms.$add({
        roomName : this.newRoomName,
        creator: this.user,
        participants: [this.user],
        messages: [this.entryMessage]
    });
    this.messageText = "";
  }
  this.newRoomName = "";
};

RoomDirectiveController.$inject = ["$state", "$firebaseArray", "$firebaseAuth"];
