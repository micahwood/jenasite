'use strict';

angular.module('jenasiteApp')
  .controller('GalleryCtrl', function ($scope, images, Lightbox) {
    var selectedImage;
    this.images = images.data;

    this.openLightboxModal = function(index) {
      Lightbox.openModal(this.images, index);
    };

    this.setImage = function(image) {
      if (image) {
        selectedImage = image;
      } else {
        selectedImage = null;
      }
    };

    this.toggleFade = function(image) {
      if (selectedImage) {
        return image !== selectedImage;
      }
    };
  });
