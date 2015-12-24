
import roomTemplate from "./room.html";
import RoomDirectiveController from './room-controller.js';

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
