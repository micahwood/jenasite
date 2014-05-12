'use strict';

angular.module('jenasiteApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.images = [
      {url: 'images/DSC_1059.jpg', thumbnail: 'images/thumbs/DSC_1059.jpg', title:'A picture'},
      {url: 'images/DSC_1077.jpg', thumbnail: 'images/thumbs/DSC_1077.jpg', title:'another picture'},
      {url: 'images/DSC_1087.jpg', thumbnail: 'images/thumbs/DSC_1087.jpg', title:'pretty picture'},
      {url: 'images/DSC_1089.jpg', thumbnail: 'images/thumbs/DSC_1089.jpg', title:'an ok picture'},
    ];
  })
  .directive('jenaVenobox', function(){
    
    return {
      restrict: 'A',
      link: function($scope, iElm) {
        iElm.venobox();

        iElm.on('mouseenter', function() {
          iElm.parent().children().addClass('fade');
          iElm.removeClass('fade');
        }).on('mouseleave', function() {
          iElm.parent().children().removeClass('fade');
        });
      }
    };
  });
