'use strict';
/**
 * @ngdoc function
 * @name richWeb2App.controller:LoginCrtl
 * @description
 * #ChannelsCtrl
 * Controller of the richWeb2App
 * Channels displays the list of all channels available
 * Allows a user to select a channel 
 */
angular.module('richWeb2App')

  .controller('ChannelsCtrl', function ($scope, $location, channelName) {
    // Set the background color
    $scope.style = {
      "background-color" : "#F3F3F3",
      "min-height": "100vh",
    };

    // Move the user to the selected channel
    // Set the channel name for reuse by the channel controller
    $scope.selectChannel = function(dest) {
      channelName.setChannel(dest);
      $location.path("/channel");
    };
  });
