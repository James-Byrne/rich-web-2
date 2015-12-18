'use strict';
/**
 * @ngdoc function
 * @name richWeb2App.controller:LoginCrtl
 * @description
 * # LoginCtrl
 * Controller of the richWeb2App
 * This controller handles user login
 */
 // global defined for jsHint
 /*global Firebase */

angular.module('richWeb2App')

  .controller('LoginCtrl', function ($scope, $location, userAuth) {
    // Set the background color
    $scope.style = {
      "background-color" : "#43A047",
      "height": "100vh",
    };

    // Instatniate the $scope.user object
    $scope.user = {
      email: "",
      password: ""
    };

    // Open a connection to Firebase
    var ref = new Firebase("https://richweb2.firebaseio.com");

    // Login the user using the list of users from firebase
    // Uses Firebase.authWithPassword()
    $scope.login = function() {
      // Check user credentials
      ref.authWithPassword({
        email    : $scope.user.email,
        password : $scope.user.password
      }, function(error) {
        if (error) {
          // Give user an error if login failed
          $scope.warning="Error, Username or password incorrect";
          // Apply changes made to $scope in Asynch task
          $scope.$apply();
        } else {
          // set the email for the user using the userAuth service
          userAuth.setEmail($scope.user.email);
          // forward user to the channels page
          $location.path("/channels");
          // Apply changes made to $scope in Asynch task
          $scope.$apply();
        }
      });
    };

  });
