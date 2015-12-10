'use strict';

/**
 * @ngdoc overview
 * @name richWeb2App
 * @description
 * # richWeb2App
 *
 * Main module of the application.
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
    'ngMaterial'
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
