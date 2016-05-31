/*global Firebase*/

export default class MainController {
    constructor($scope, $firebaseArray) {

        var ref = new Firebase("https://learn11.firebaseio.com");
        $scope.messages = $firebaseArray(ref);

        $scope.addMessage = function() {
            $scope.messages.$add({
                text: $scope.newMessageText
            });
        };
    };
    
    login($scope, $firebaseAuth) {
         var ref = new Firebase("https://learn11.firebaseio.com");
        var auth = $firebaseAuth(ref);
        // login with Facebook
        auth.$authWithOAuthPopup("facebook").then(function(authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
            console.log("Authentication failed:", error);
        });
    };
}