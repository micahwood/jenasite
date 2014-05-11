'use strict';

angular
  .module('jenasiteApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/work', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/cv', {
        templateUrl: 'views/resume.html'
      })
      .when('/work', {
        templateUrl: 'views/gallery.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/cv', {
        templateUrl: 'views/resume.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
