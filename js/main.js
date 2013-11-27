$(document).ready(function() {

  var $resume = $('#resume'),
      $navbar = $('.navbar'),
      $images = $('#images'),
      resumeDisplayed = false;

  $('.nav').on('click', 'li', function(event) {
    var target = event.target.text;

    $('.active').removeClass('active');
    $(this).addClass('active');
    switch (target) {
      case 'Resume':
        showResume();
        break;
      default:
        hideResume();
    }
  });

  if (window.innerWidth <= 765) {
    $('.nav').removeClass('wider');
  }

  var showResume = function showResume() {
    if (!resumeDisplayed) {
      var height = window.innerHeight * 0.8;
      $resume.show();
      $resume.animate({top: '0px'}, 800);
      $navbar.animate({top: height}, 800);
      resumeDisplayed = !resumeDisplayed;
      setTimeout(function() { $images.hide();}, 800);
    }
  };

  var hideResume = function hideResume() {
    if (resumeDisplayed) {
      $resume.animate({top: '-100%'}, 600);
      $navbar.animate({top: '0px'}, 600);
      resumeDisplayed = !resumeDisplayed;
      setTimeout(function() { $resume.hide();}, 800);
      $images.show();
    }
  };

  var onMouseOutOpacity = 0.67;
  $('#thumbs ul.thumbs li').opacityrollover({
    mouseOutOpacity:   onMouseOutOpacity,
    mouseOverOpacity:  1.0,
    fadeSpeed:         'fast',
    exemptionSelector: '.selected'
  });

  $('#thumbs').galleriffic({
    delay: 2500,
    numThumbs: 29,
    imageContainerSel: '#slideshow',
    loadingContainerSel: '#loading',
    defaultTransitionDuration: 1000,
    renderSSControls: false,
    renderNavControls: false,
    enableBottomPager: false,
    syncTransitions: false,
    onSlideChange: function(prevIndex, nextIndex) {
      this.find('ul.thumbs').children()
        .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
        .eq(nextIndex).fadeTo('fast', 1.0);
    },
    onPageTransitionOut: function(callback) {
      this.fadeTo('fast', 0.0, callback);
    },
    onPageTransitionIn: function() {
      this.fadeTo('fast', 1.0);
    }
  });

});
