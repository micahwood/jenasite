angular.module('bootstrapLightbox', []).provider('Lightbox', function() {
  return {
    $get: function() {
      this.getImageCaption = function(image) {
        return image.caption;
      };
      return this;
    }
  };
});

angular.module('mockedGallery', [])
  .value('imagesJson', [
  {"title":"HEre tlakejrlawekajre the Mountain Was MadeHere the Mountain Was Made","url":"images\/DSC_1077.jpg","thumbnail":"images\/thumbs\/DSC_1077.jpg"},
  {"title":"","url":"images\/DSC_1059.jpg","thumbnail":"images\/thumbs\/DSC_1059.jpg"},
  {"title":"","url":"images\/Hardy.jpg","thumbnail":"images\/thumbs\/Hardy.jpg"},
  {"title":"","url":"images\/DSC_1087.jpg","thumbnail":"images\/thumbs\/DSC_1087.jpg"},
  {"title":"","url":"images\/DSC_1089.jpg","thumbnail":"images\/thumbs\/DSC_1089.jpg"},
  {"title":"","url":"images\/DSC_1090.jpg","thumbnail":"images\/thumbs\/DSC_1090.jpg"},
  {"title":"","url":"images\/DSC_1100.jpg","thumbnail":"images\/thumbs\/DSC_1100.jpg"},
  {"title":"","url":"images\/HardyI.jpg","thumbnail":"images\/thumbs\/HardyI.jpg"},
  {"title":"","url":"images\/NotSoFarAway.jpg","thumbnail":"images\/thumbs\/NotSoFarAway.jpg"},
  {"title":"IChute the pool","url":"images\/chutethepool.jpg","thumbnail":"images\/thumbs\/chutethepool.jpg"},
  {"title":"","url":"images\/beforewecame.jpg","thumbnail":"images\/thumbs\/beforewecame.jpg"},
  {"title":"","url":"images\/ifit'sfound.jpg","thumbnail":"images\/thumbs\/ifit'sfound.jpg"},
  {"title":"","url":"images\/it_has_a_growing_voice.jpg","thumbnail":"images\/thumbs\/it_has_a_growing_voice.jpg"},
  {"title":"","url":"images\/piecebypiece.jpg","thumbnail":"images\/thumbs\/piecebypiece.jpg"},
  {"title":"","url":"images\/surprisecorner II.jpg","thumbnail":"images\/thumbs\/surprisecorner II.jpg"},
  {"title":"","url":"images\/surprisecorner.jpg","thumbnail":"images\/thumbs\/surprisecorner.jpg"},
  {"title":"","url":"images\/tothisplace.jpg","thumbnail":"images\/thumbs\/tothisplace.jpg"},
  {"title":"","url":"images\/white_river.jpg","thumbnail":"images\/thumbs\/white_river.jpg"},
  {"title":"","url":"images\/worldupturned.img001.jpg","thumbnail":"images\/thumbs\/worldupturned.img001.jpg"},
  {"title":"","url":"images\/worldupturned.img002.jpg","thumbnail":"images\/thumbs\/worldupturned.img002.jpg"},
  {"title":"","url":"images\/worldupturned.img003.jpg","thumbnail":"images\/thumbs\/worldupturned.img003.jpg"},
  {"title":"","url":"images\/worldupturned.img004.jpg","thumbnail":"images\/thumbs\/worldupturned.img004.jpg"},
  {"title":"","url":"images\/worldupturned.img005.jpg","thumbnail":"images\/thumbs\/worldupturned.img005.jpg"},
  {"title":"","url":"images\/worldupturned.img006.jpg","thumbnail":"images\/thumbs\/worldupturned.img006.jpg"},
  {"title":"","url":"images\/worldupturned.img007.jpg","thumbnail":"images\/thumbs\/worldupturned.img007.jpg"},
  {"title":"","url":"images\/worldupturned.img008.jpg","thumbnail":"images\/thumbs\/worldupturned.img008.jpg"},
  {"title":"","url":"images\/worldupturned.img009.jpg","thumbnail":"images\/thumbs\/worldupturned.img009.jpg"},
  {"title":"","url":"images\/worldupturned.img010.jpg","thumbnail":"images\/thumbs\/worldupturned.img010.jpg"},
  {"title":"","url":"images\/worldupturned.img011.jpg","thumbnail":"images\/thumbs\/worldupturned.img011.jpg"}
]);