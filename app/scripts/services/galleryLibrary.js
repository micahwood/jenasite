'use strict';

angular.module('jenasiteApp').factory('galleryLibrary', function($http, ENV) {
  var path = (ENV === 'development') ? '/images.json' : '/image';
  return {
    getImages: function() {
      return $http.get(path).success(function(data) {
        return data;
      });
    }
  };
});