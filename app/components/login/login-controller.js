export default function LoginDirectiveController ($state, AuthService){
  this.state = $state;
  this.auth = AuthService;
  this.email="";
  this.password="";
}

LoginDirectiveController.prototype.signUp = function() {
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

LoginDirectiveController.$inject=["$state", "AuthService"];
