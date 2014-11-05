'use strict';

angular
  .module('jenasiteApp', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'bootstrapLightbox'
  ])
  .config(function ($routeProvider, $locationProvider, LightboxProvider) {
    $locationProvider.html5Mode(true);
    LightboxProvider.getImageCaption = function(image) {
      return image.title;
    };
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
  }).run(function($rootScope, $location){
    var path = function() { return $location.path();};
    $rootScope.$watch(path, function(newVal){
      $rootScope.activetab = newVal;
    });
  });