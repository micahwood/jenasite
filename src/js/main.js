$(document).ready(function() {

  var $resume = $('#resume'),
      $navbar = $('.navbar'),
      $gallery = $('#gallery'),
      $bio = $('#bio'),
      $thumbs = $('#thumbs'),
      $lightbox = $('.lightbox'),
      $homeImage = $('#home-image'),
      fadeSpeed = 900;

  $lightbox.venobox();

  if ($(window).innerWidth() < 765)
    $('.navbar-stack').removeClass('fixed');

  $('.nav').on('click', 'li', function(event) {
    var target = event.target.text.toLowerCase();

    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.displayed').fadeOut().removeClass('displayed');
    switch (target) {
      case 'cv':
        $resume.fadeIn(fadeSpeed).addClass('displayed');
        break;
      case 'about':
        $bio.fadeIn(fadeSpeed).addClass('displayed');
        break;
      case 'work':
        $thumbs.fadeIn(fadeSpeed).addClass('displayed');
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

});
