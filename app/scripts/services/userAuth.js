'use strict';
/**
 * @ngdoc function
 * @name richWeb2App.service:userAuth
 * @description
 * #userAuth
 * Service of the richWeb2App
 * Service for checking the users login status
 */

 // global defined for jsHint
 /*global Firebase */

angular.module('richWeb2App')

  .service('userAuth', function() {
    var ref = new Firebase("https://richweb2.firebaseio.com");
    var userEmail = "";

    return {
      isLoggedIn: function() {
        ref.onAuth(function(authData) {
          if (authData) {
            console.log("Authenticated with uid:", authData.uid);
            return true;
          } else {
            console.log("Client unauthenticated.");
            return false;
          }
        });
      },
      getEmail: function() {
        return userEmail;
      },
      setEmail: function(value){
        userEmail = value;
      }
    };

  });
