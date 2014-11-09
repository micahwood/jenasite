'use strict';

angular.module('jenasiteApp')
  .controller('GalleryCtrl', function ($scope, images, Lightbox) {
    var vm = this,
        selectedImage;
    vm.images = images.data;

    vm.openLightboxModal = function(index) {
      Lightbox.openModal(vm.images, index);
    };

    vm.setImage = function(image) {
      if (image) {
        selectedImage = image;
      } else {
        selectedImage = null;
      }
    };

    vm.toggleFade = function(image) {
      if (selectedImage) {
        return image !== selectedImage;
      }
    };
  });
