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

  .controller('LoginCtrl', function ($scope, $location) {
    // Set the background color
    $scope.style = {
      "background-color" : "#43A047",
      "height": "100vh",
    };

    var ref = new Firebase("https://richweb2.firebaseio.com");

    $scope.login = function() {
      ref.authWithPassword({
        email    : $scope.user.email,
        password : $scope.user.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          $location.path("/channels");
        }
      });
    };
  });
