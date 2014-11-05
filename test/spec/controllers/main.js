'use strict';

describe('Controller: GalleryCtrl', function () {

  var GalleryCtrl,
    imageMock,
    scope;

  // load the controller's module
  beforeEach(module('jenasiteApp'));

  imageMock = {
    data: [{'title':'Hello World','url':'image.jpg','thumbnail':'thumb.jpg'}]
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GalleryCtrl = $controller('GalleryCtrl', {
      $scope: scope,
      images: imageMock
    });
  }));

  it('should attach a list of images to the scope', function () {
    expect(scope.images.length).toBeDefined();
    expect(scope.images.length).toBe(1);
  });

  it('should contain a collection of titles, urls and thumbnails', function() {
    var image = scope.images[0];
    expect(image.title).toBe('Hello World');
    expect(image.url).toBe('image.jpg');
    expect(image.thumbnail).toBe('thumb.jpg');
  });

  it('should define openLightboxModal', function() {
    expect(scope.openLightboxModal).toBeDefined();
  });
});
