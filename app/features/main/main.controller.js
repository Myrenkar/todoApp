/*global Firebase*/

export default class MainController {
    constructor($scope, $firebaseArray, $firebaseAuth) {

        var ref = new Firebase("https://learn11.firebaseio.com/todos");
        $scope.messages = $firebaseArray(ref);

        $scope.addMessage = function() {
            $scope.messages.$add({
                text: $scope.newMessageText
            });
        };

        $scope.isLogged = false

        $scope.loginUser = function() {
            ref.authWithPassword({
                email: $scope.email,
                password: $scope.password
            }, function(error, authData) {
                if (error) {
                    $scope.isLogged = false
                    console.log("Login Failed!", error);
                }
                else {
                    $scope.isLogged = true
                    console.log($scope.isLogged)
                }
            });
        };

        $scope.addTask = function() {
            var message_ref = new Firebase('https://learn11.firebaseio.com/todos');
            var newMessageRef = message_ref.push();
            newMessageRef.set({
                'done': false,
                'text': $scope.task,
                'mail': $scope.email
            });

        };
        $scope.editTask = function(message) {
            $scope.message = $scope.messages.text;
            console.log($scope.messages.text);
          
        }

        $scope.doneTask = function(message) {
            var ref = new Firebase('https://learn11.firebaseio.com/todos/' + message.$id)
            ref.update({
                done: true
            });
        }
        $scope.unDoneTask = function(message) {
            var ref = new Firebase('https://learn11.firebaseio.com/todos/' + message.$id)
            ref.update({
                done: false
            });
        }


        $scope.deleteTask = function(message) {
            console.log(message)
            $scope.messages.$remove(message)
        }

    }
}