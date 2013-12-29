$(document).ready(function() {

  var $resume = $('#resume'),
      $navbar = $('.navbar'),
      $gallery = $('#gallery'),
      $thumbs = $('#thumbs'),
      $lightbox = $('.lightbox'),
      $resumeImage = $('#resume-image'),
      resumeDisplayed = false,
      onMouseOutOpacity = 0.47;

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
      var height = window.innerHeight * 0.91;
      $resume.show();
      $resume.animate({top: '0px'}, 800);
      $navbar.animate({top: height}, 800);
      resumeDisplayed = !resumeDisplayed;
      
      setTimeout(
        function() {
          $gallery.hide();
          $navbar.addClass('navbar-fixed-bottom');
          $resumeImage.addClass('fixed');
        }, 800);
    }
  };

  var hideResume = function hideResume() {
    if (resumeDisplayed) {
      $navbar.removeClass('navbar-fixed-bottom');
      $resumeImage.removeClass('fixed');
      $resume.animate({top: '-200%'}, 600);
      $navbar.animate({top: '0px'}, 600);
      resumeDisplayed = !resumeDisplayed;
      setTimeout(function() { $resume.hide();}, 800);
      $gallery.show();
    }
  };

  $('#thumbs ul.thumbs li').opacityrollover({
    mouseOutOpacity:   onMouseOutOpacity,
    mouseOverOpacity:  1.0,
    fadeSpeed:         'fast',
    exemptionSelector: '.selected'
  });

  $lightbox.venobox();

});
