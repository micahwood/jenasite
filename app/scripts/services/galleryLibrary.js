'use strict';

angular.module('jenasiteApp').factory('galleryLibrary', function($http, ENV) {
  var path = (ENV === 'development') ? '/images.json' : '/image';

  return {
    getImages: function(category) {
      category = category || 'current';
      return $http.get(path + '?category=' + category);
    }
  };

});
