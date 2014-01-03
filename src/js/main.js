$(document).ready(function() {

  var $resume = $('#resume'),
      $navbar = $('.navbar'),
      $gallery = $('#gallery'),
      $thumbs = $('#thumbs'),
      $lightbox = $('.lightbox'),
      $resumeImage = $('#resume-image'),
      wall = new freewall($thumbs),
      resumeDisplayed = false,
      onMouseOutOpacity = 0.47;

  $lightbox.venobox();
  wall.reset({
    // cellW: 20,
    // cellH: 100,
    gutterX: 4,
    gutterY: 4,
    onResize: function() { wall.fitWidth(); }
  }).fitZone();

  if (window.innerWidth <= 765) {
    $('.nav').removeClass('wider');
  }

  $('.name').on('click', function() {
    $('.nav li').children().first().click();
  })

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

  var showResume = function showResume() {
    if (!resumeDisplayed) {
      var height = window.innerHeight - $('nav').height();
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
      $resume.animate({top: '-100%'}, 600);
      $navbar.animate({top: '0px'}, 600);
      resumeDisplayed = !resumeDisplayed;
      setTimeout(function() { $resume.hide();}, 800);
      $gallery.show();
    }
  };

  $('#thumbs a').opacityrollover({
    mouseOutOpacity:   1.0,
    mouseOverOpacity:  0.47,
    fadeSpeed:         'fast',
    exemptionSelector: '.selected'
  });

});
