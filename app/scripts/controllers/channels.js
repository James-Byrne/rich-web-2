'use strict';
/**
 * @ngdoc function
 * @name richWeb2App.controller:LoginCrtl
 * @description
 * #ChannelsCtrl
 * Controller of the richWeb2App
 * This controller handles user login
 */
angular.module('richWeb2App')

  .controller('ChannelsCtrl', function ($scope, $location) {
    // Set the background color
    $scope.style = {
      "background-color" : "#F3F3F3",
      "min-height": "100vh",
    };

    $scope.selectChannel = function(dest) {
      $location.path(dest);
    };


  });
