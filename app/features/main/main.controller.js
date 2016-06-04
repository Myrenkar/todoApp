/*global Firebase*/

export default class MainController {
    constructor($scope, $firebaseArray, $firebaseAuth, $firebaseObject) {

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
                'done': true,
                'text': $scope.task,
                'mail': $scope.email
            });

        };
        $scope.editTask = function(message) {
            $scope.message = $scope.messages.text;
            console.log($scope.messages.text);
            // $scope.editIndex = index;
        }

        $scope.doneTask = function(message) {
            var ref = new Firebase('https://learn11.firebaseio.com/todos/' + message.$id)
            // var selected_message = $firebaseObject(ref)
            // console.log(selected_message)
            console.log(ref)
            console.log(message.$id)
            ref.update({
                done: true
            });
        }
        $scope.unDoneTask = function(message) {
            var ref = new Firebase('https://learn11.firebaseio.com/todos/' + message.$id)
                //  var selected_message =   $firebaseArray(ref)
            // var selected_message = $firebaseObject(ref)
            // console.log(selected_message)
            console.log(message.$id)
            console.log(ref)
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