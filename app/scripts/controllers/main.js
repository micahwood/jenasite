'use strict';

angular.module('jenasiteApp')
  .controller('GalleryCtrl', function ($scope, $http) {
    $http.get('/image').success(function(data) {
      $scope.images = data;
    });
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
