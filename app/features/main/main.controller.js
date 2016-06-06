/*global Firebase*/

export default class MainController {
    constructor($scope, $firebaseArray, $firebaseAuth, $rootScope) {

        var ref = new Firebase("https://learn11.firebaseio.com/todos");
        $scope.messages = $firebaseArray(ref);

        $scope.addMessage = function() {
            $scope.messages.$add({
                text: $scope.newMessageText
            });
        };
        $scope.emails = []
       
        $scope.isDoneVisible = true
        $scope.isActiveVisible = true

        $rootScope.isLogged = false;

        // $scope.loginUser = function() {

        //     ref.authWithPassword({
        //         email: $scope.email,
        //         password: $scope.password
        //     }, function(error, authData) {
        //         if (error) {
        //             $scope.$apply(function() {
        //                 $rootScope.isLogged = false
        //             });
        //             console.log("Login Failed!", error);
        //         }
        //         else {
        //             $scope.$apply(function() {
        //                 $rootScope.isLogged = true
        //                 console.log($rootScope.isLogged)
        //             });
        //             //  $rootScope.$broadcast('isLogged', true)


        //         }
        //     });
        // };
        $scope.loginUser = function() {
            ref.orderByValue().on("value", function(snapshot) {
                snapshot.forEach(function(data) {
                    var firebase_mail = data.val().mail;
                    if ($scope.emails.indexOf(firebase_mail) == -1) {
                        $scope.emails.push(firebase_mail);
                    }
                });

            });

            $scope.isLogged = $scope.emails.some(function(arrVal) {
                return $scope.email === arrVal;
            });
            console.log($scope.isLogged);


        };
        // $scope.emails.forEach(function(mail){

        //   if (mail == $scope.email){}

        // });

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

        $scope.filterAll = function() {
            $scope.isDoneVisible = true
            $scope.isActiveVisible = true
            console.log($scope.isActiveVisible)
            console.log($scope.isDoneVisible)
        };
        $scope.filterActive = function() {
            $scope.isDoneVisible = false
            $scope.isActiveVisible = true
            console.log($scope.isActiveVisible)
            console.log($scope.isDoneVisible)
        };

        $scope.filterDone = function() {

            $scope.isDoneVisible = true
            $scope.isActiveVisible = false
            console.log('Active : ' + $scope.isActiveVisible)
            console.log('Done : ' + $scope.isDoneVisible)

        };



    }
}