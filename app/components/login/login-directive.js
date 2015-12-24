
import loginTemplate from "./login.html";

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

function LoginDirectiveController ($state, $firebaseAuth){
  this.state = $state;
  let ref = new Firebase("https://boiling-heat-55.firebaseio.com/");
  this.auth = $firebaseAuth(ref);
  this.email="";
  this.password="";
}
LoginDirectiveController.prototype.signUp = function() {
  var self = this;
  this.auth.$createUser({
       email: this.email,
       password:   this.password
  }).then(function(userData) {
      console.log("Authenticated successfully with payload:", userData);
  }).catch(function(error) {
    console.log("Login Failed!", error);
  });
};
LoginDirectiveController.prototype.logIn = function() {
var self = this;
  this.auth.$authWithPassword({
       email: this.email,
       password:  this.password
  },{
  remember: "sessionOnly"
}).then(function(userData) {
      console.log("loged successfully with payload:", userData);
      self.state.go('rooms');
  }).catch(function(error) {
    console.log("Login Failed!", error);
  });
};
LoginDirectiveController.prototype.logOut = function() {
  this.auth.$unauth();
  this.state.reload();
};

LoginDirectiveController.$inject=["$state", "$firebaseAuth"];
