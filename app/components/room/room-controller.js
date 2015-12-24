export default function RoomController($state) {
    this.name = 'home';
    this.state = $state;
}
RoomController.$inject = ["$state", "$stateParams"];
