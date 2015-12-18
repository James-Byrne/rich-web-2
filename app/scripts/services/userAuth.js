'use strict';
/**
 * @ngdoc function
 * @name richWeb2App.service:userAuth
 * @description
 * #userAuth
 * Service of the richWeb2App
 * Service for getting the users email once they are
 * logged in or get default "email"
 */

angular.module('richWeb2App')

  .service('userAuth', function() {
    // Default to anon
    var userEmail = "anon";

    // Track the users email(name) throughout the site
    // getEmail() returns the users email or default
    // setEmail() changes the value of users email
    return {
      getEmail: function() {
        return userEmail;
      },
      setEmail: function(value){
        userEmail = value;
      }
    };
  });
