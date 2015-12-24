export default function ChatService ( $firebaseAuth ){
  let DBRef = new Firebase("https://boiling-heat-55.firebaseio.com/");
  return  $firebaseAuth(DBRef);
}

ChatService.$inject=[ "$firebaseAuth" ];
