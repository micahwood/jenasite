$(document).ready(function() {

  var $resume = $('#resume'),
      $navbar = $('.navbar'),
      $gallery = $('#gallery'),
      $bio = $('#bio'),
      $thumbs = $('#thumbs'),
      $lightbox = $('.lightbox'),
      $homeImage = $('#home-image');

  $lightbox.venobox();

  $('.nav').on('click', 'li', function(event) {
    var target = event.target.text.toLowerCase();

    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.displayed').fadeOut().removeClass('displayed');
    switch (target) {
      case 'cv':
        $resume.fadeIn('slow').addClass('displayed');
        break;
      case 'about':
        $bio.fadeIn('slow').addClass('displayed');
        break;
      case 'work':
        $thumbs.fadeIn('slow').addClass('displayed');
        break;
      default:
        hideResume();
    }
  });

  $('#thumbs a').on({
    mouseenter: function() {
      $('#thumbs a').addClass('fade');
      $(this).removeClass('fade');
    }, mouseleave: function() {
      $('#thumbs a').removeClass('fade');
    }
  });

  var buildGallery = function() {
    wall.reset({
      cellW: 170,
      cellH: 'auto',
      gutterX: 8,
      gutterY: 8,
      onResize: function() { wall.fitWidth(); }
    }).fitWidth();
  }

  // images need to load before they can be manipulated
  $(window).load(function() {
    // buildGallery();
  });

});
