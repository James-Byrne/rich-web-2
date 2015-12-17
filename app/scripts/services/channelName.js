'use strict';
/**
 * @ngdoc function
 * @name richWeb2App.service:channelName
 * @description
 * #channelName
 * Service of the richWeb2App
 * Service for setting the channel to join
 * All it does is allow for passing a string between controllers
 */

angular.module('richWeb2App')

  .service('channelName', function() {
    // Declare channelName
    var channelName;

    // Return the selected channel
    // getChannel() returns the name of the selected channel
    // setChannel() assigns a new value to the channelName
    return {
      getChannel: function(){
        return channelName;
      },
      setChannel: function(value) {
        channelName = value;
      }
    };
  });
