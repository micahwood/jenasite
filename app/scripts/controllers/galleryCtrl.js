'use strict';

angular.module('jenasiteApp')
  .controller('GalleryCtrl', function ($scope, images, Lightbox) {
    $scope.images = images.data;

    $scope.openLightboxModal = function(index) {
      Lightbox.openModal($scope.images, index);
    };
  });
