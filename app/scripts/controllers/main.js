'use strict';

/**
 * @ngdoc function
 * @name richWeb2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the richWeb2App
 */
angular.module('richWeb2App')

  .controller('MainCtrl', function ($scope) {

    // Set the background image
    $scope.style = {
      "background-image" : "url(../images/main-photo.jpg)",
      "min-height" : "100%"
    };

  });
