'use strict';
/**
 * @ngdoc function
 * @name richWeb2App.controller:RegisterCtrl
 * @description
 * #RegisterCtrl
 * Controller of the richWeb2App
 * This controller handles user registration
 */
 // Global value defined for jsHint
 /*global Firebase */


angular.module('richWeb2App')

  .controller('RegisterCtrl', function ($scope, $location) {
    // Set the background color
    $scope.style = {
      "background-color" : "#43A047",
      "height": "100vh",
    };

    // Instatniate user object
    $scope.user = {
      email: "",
      password: ""
    };

    // Open a connection to Firebase
    var ref = new Firebase("https://richweb2.firebaseio.com/");

    // Register a user using their email and password
    // Uses Firebase.createUser()
    $scope.register = function() {
      // Assign the values of the new user
      ref.createUser({
        email    : $scope.user.email,
        password : $scope.user.password
      }, function(error) {
        if (error) {
          // Give the user the error as a string
          $scope.warning = error.toString();
          // Apply changes made to $scope in Asynch task
          $scope.$apply();
        } else {
          // User successfully logged in, forward to login page
          $location.path("/login");
          // Apply changes made to $scope in Asynch task
          $scope.$apply();
        }
      });
    };
  });
