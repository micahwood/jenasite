'use strict';

angular
  .module('jenasiteApp', [
    'ngResource',
    'ngRoute',
    'ngAnimate'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/work', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        resolve: {
          images: ['galleryLibrary', function(galleryLibrary) {
            return galleryLibrary.getImages();
          }]
        }
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
  }]).run(['$rootScope', '$location', function($rootScope, $location){
    var path = function() { return $location.path();};
    $rootScope.$watch(path, function(newVal){
      $rootScope.activetab = newVal;
    });
  }]);