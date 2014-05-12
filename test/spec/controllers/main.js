'use strict';

describe('Controller: GalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('jenasiteApp'));

  var GalleryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GalleryCtrl = $controller('GalleryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of images to the scope', function () {
    expect(scope.images.length).toBe(4);
  });
});
