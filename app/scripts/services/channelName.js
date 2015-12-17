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
    var channelName = "";

    return {
      getChannel: function(){
        return channelName;
      },
      setChannel: function(value) {
        channelName = value;
        console.log('service working' + channelName);
      }
    };
  });
