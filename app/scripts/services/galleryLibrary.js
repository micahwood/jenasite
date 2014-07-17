'use strict';

angular.module('jenasiteApp').factory('galleryLibrary', function($http) {
  return {
    getImages: function() {
      return $http.get('/image').success(function(data) {
        return data;
      });
    }
  };
});