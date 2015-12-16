'use strict';
/**
 * @ngdoc function
 * @name richWeb2App.controller:RegisterCtrl
 * @description
 * # LoginCtrl
 * Controller of the richWeb2App
 * This controller handles user login
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

    var ref = new Firebase("https://richweb2.firebaseio.com/");

    $scope.register = function() {
      ref.createUser({
        email    : $scope.user.email,
        password : $scope.user.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          $location.path("/login");
        }
      });
    };
  });
