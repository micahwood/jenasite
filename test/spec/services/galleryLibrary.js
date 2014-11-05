'use strict';

describe('Service: GalleryLibrary', function() {

  var Service,
    httpBackend;

  beforeEach(module('jenasiteApp', 'mockedGallery'));

  beforeEach(inject(function($httpBackend, galleryLibrary, imagesJson) {
    httpBackend = $httpBackend;
    $httpBackend.whenGET('/images.json').respond(imagesJson);
    Service = galleryLibrary;
  }));

  it('should get a collection of json images', function() {
    var results = Service.getImages();
    httpBackend.flush();
    expect(results).toBeDefined();
  });
});