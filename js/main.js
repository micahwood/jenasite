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

});

