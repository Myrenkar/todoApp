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


        $scope.loginUser = function() {
            ref.authWithPassword({
                email: $scope.emailToSend,
                password: $scope.passwordToSend
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                }
                else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        };

        $scope.registerUser = function() {

            ref.createUser({
                email: $scope.mail,
                password: $scope.password
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