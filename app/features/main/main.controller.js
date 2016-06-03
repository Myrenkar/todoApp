/*global Firebase*/

export default class MainController {
    constructor($scope, $firebaseArray, $firebaseAuth) {

        var ref = new Firebase("https://learn11.firebaseio.com/todos");
        $scope.messages = $firebaseArray(ref);

        $scope.tasks = [];
        $scope.editIndex = false;
        console.log("  messages " + $scope.messages)
        $scope.addMessage = function() {
            $scope.messages.$add({
                text: $scope.newMessageText
            });
        };

        $scope.isLogged = false
        console.log("  Poczatek " + $scope.isLogged)
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
                    console.log("Authenticated successfully with payload:", $scope.email);
                }
            });
            console.log('https://samplechat.firebaseio-demo.com/users/$scope.messages[index].id')
            console.log("  Koniec " + $scope.isLogged)
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
        $scope.editTask = function(index) {
            $scope.task = $scope.messages[index].text;
            console.log($scope.messages[index].text);
            $scope.editIndex = index;
        }

        $scope.doneTask = function(index) {
            $scope.messages[index].done = true;

        }
        $scope.unDoneTask = function(index) {
            $scope.messages[index].done = false;
        }
        console.log("  Daleko " + $scope.isLogged)

        $scope.deleteTask = function(index) {
            
            var fredRef = new Firebase('https://samplechat.firebaseio-demo.com/users/$scope.messages[index].id');
           
        }

    }
}