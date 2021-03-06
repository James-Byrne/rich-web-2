'use strict';

/**
 * @ngdoc overview
 * @name richWeb2App
 * @description
 * # richWeb2App
 *
 * Main module of the application.
 * Handles the routing for the application and dependencies 
 */
angular
  .module('richWeb2App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'firebase'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {

    // Set the theme of Angular Material with the primary and accent colors
    $mdThemingProvider.theme('default')
    // Setting the default hue to ve used in primary color pallete
    .primaryPalette('grey', {
      'default' : '900'
    })
    .accentPalette('green', {
      'default' : '600'
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/channels', {
        templateUrl: 'views/channels.html',
        controller: 'ChannelsCtrl',
        controllerAs: 'channels'
      })
      .when('/channel', {
        templateUrl: 'views/channel.html',
        controller: 'ChannelCtrl',
        controllerAs: 'channel'
      })
      .otherwise({
        // Redirect to the 404 page
        redirectTo: '/'
      });
  });
