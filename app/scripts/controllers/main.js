'use strict';

angular.module('jenasiteApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.images = [
      {mainUrl: "images/DSC_1059.jpg", thumbnail: "images/original/thumbs/DSC_1059.jpg"},
      {mainUrl: "images/DSC_1077.jpg", thumbnail: "images/original/thumbs/DSC_1077.jpg"},
      {mainUrl: "images/DSC_1087.jpg", thumbnail: "images/original/thumbs/DSC_1087.jpg"},
      {mainUrl: "images/DSC_1089.jpg", thumbnail: "images/original/thumbs/DSC_1089.jpg"},
    ];
  })
  .directive('jenaVenobox', function(){
    
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        $(iElm).venobox();
      }
    };
  });;
