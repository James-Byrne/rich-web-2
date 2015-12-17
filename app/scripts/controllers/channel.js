'use strict';
/**
 * @ngdoc function
 * @name richWeb2App.controller:ChannelCrtl
 * @description
 * #ChannelCtrl
 * Controller of the richWeb2App
 *
 */

 // global defined for jsHint
 /*global Firebase */

angular.module('richWeb2App')

  .controller('ChannelCtrl', function ($scope, $location, channelName, $firebaseArray) {
    // Set the background color
    $scope.style = {
      "background-color" : "#F3F3F3",
      "min-height": "100vh",
    };

    // Get the channel the user selected
    var channel = channelName.getChannel();
    // Check if channel is empty, if it is return them to the channels page
    if (!channel) {
      $location.path("/channels");
    } else {

      // Open the connection to the channel
      var ref = new Firebase("https://richweb2.firebaseio.com" + channel);
      // Get the messages from selected channel
      $scope.messages = $firebaseArray(ref);

      // Send a message from the user to the channel
      $scope.sendMessage = function () {
        $scope.messages.$add({
          text: $scope.newMessage
        });
        console.log($scope.newMessage);
      };
    }
  });
