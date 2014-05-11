'use strict';

angular.module('jenasiteApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.images = [
      {mainUrl: "images/DSC_1059.jpg", thumbnail: "images/thumbs/DSC_1059.jpg", title:"A picture"},
      {mainUrl: "images/DSC_1077.jpg", thumbnail: "images/thumbs/DSC_1077.jpg", title:"another picture"},
      {mainUrl: "images/DSC_1087.jpg", thumbnail: "images/thumbs/DSC_1087.jpg", title:"pretty picture"},
      {mainUrl: "images/DSC_1089.jpg", thumbnail: "images/thumbs/DSC_1089.jpg", title:"an ok picture"},
    ];

    // $scope.setTransparency = function
  })
  .directive('jenaVenobox', function(){
    
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        $(iElm).venobox();
      }
    };
  });;
