'use strict';

angular
  .module('jenasiteApp', [
    'config',
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
    LightboxProvider.calculateModalDimensions = function (dimensions) {
      var width = Math.max(400, dimensions.imageDisplayWidth + 32);

      if (width >= dimensions.windowWidth - 20 || dimensions.windowWidth < 768) {
        width = 'auto';
      }

      return {
        'width': width,                             // default
        'height': 'auto'                            // custom
      };
    };
    LightboxProvider.templateUrl = 'views/lightbox.html';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/work/:category?', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl as vm',
        resolve: {
          images: function($route, galleryLibrary) {
            return galleryLibrary.getImages($route.current.params.category);
          }
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
  }).run(function($rootScope, $location, $window, $timeout){
    var path = function() { return $location.path();};
    var handleRouteChange = function() {
      $window.ga('send', 'pageview', {page: path()});
      $timeout(function () {
        $window.scrollTo(0,0);
      }, 500);
    };
    $rootScope.$watch(path, function(newVal){
      $rootScope.activetab = newVal;
    });
    $rootScope.$on('$routeChangeSuccess', handleRouteChange);
    $rootScope.isCollapsed = true;
    $rootScope.toggleCollapse = function() {
      $rootScope.isCollapsed = !$rootScope.isCollapsed;
    };
  });
