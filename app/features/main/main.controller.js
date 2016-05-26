export default class MainController {
  constructor($scope, $firebaseArray ) {
      
      var  ref = new Firebase("https://learn11.firebaseio.com");
      $scope.messages = $firebaseArray (ref);
  }
}