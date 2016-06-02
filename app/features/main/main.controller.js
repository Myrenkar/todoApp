/*global Firebase*/

export default class MainController {
    constructor($scope, $firebaseArray, $firebaseAuth) {

        var ref = new Firebase("https://learn11.firebaseio.com");
        $scope.messages = $firebaseArray(ref);

        $scope.addMessage = function() {
            $scope.messages.$add({
                text: $scope.newMessageText
            });
        };


        $scope.login = function() {
            var auth = $firebaseAuth(ref);
            // login with Facebook
            auth.$authWithOAuthPopup("facebook").then(function(authData) {
                console.log("Logged in as:", authData.uid);
            }).catch(function(error) {
                console.log("Authentication failed:", error);
            });
        };

        $scope.register = function() {

            ref.createUser({
                email: $scope.mail,
                password : $scope.password
            }, function(error, userData) {
                if (error) {
                    console.log("Error creating user:", error);
                }
                else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });

        };



        // function($scope) {
        //     $scope.isCollapsed = false;
        // };
    }
}