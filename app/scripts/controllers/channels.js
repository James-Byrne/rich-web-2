'use strict';
/**
 * @ngdoc function
 * @name richWeb2App.controller:LoginCrtl
 * @description
 * #ChannelsCtrl
 * Controller of the richWeb2App
 *
 */
angular.module('richWeb2App')

  .controller('ChannelsCtrl', function ($scope, $location, channelName) {
    // Set the background color
    $scope.style = {
      "background-color" : "#F3F3F3",
      "min-height": "100vh",
    };

    $scope.selectChannel = function(dest) {
      channelName.setChannel(dest);
      console.log(dest);
      $location.path("/channel");
    };
  });