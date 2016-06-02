/*global Firebase*/

export default class RegisterController {
    constructor($scope, $firebaseAuth) {
           var ref = new Firebase("https://learn11.firebaseio.com");
        
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
        
    };

};