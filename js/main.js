// When hovering over each of navs
  // Add class .fontsize
// When NOT hovering
  // Remove class .fontsize

$('li a').hover(function () {
  $(this).addClass('fontsize');
}, function () {
  $(this).removeClass('fontsize');
});



// Determine the distance from the top of the .header to the top of the page
var stickyNavTop = $('.header').offset().top;
// When scrolling down the page
$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();

  // When the distance from the top of the page to where the user has scrolled is >= the distance from the stickyNavTop
  if( scrollTop >= stickyNavTop ) {

    // Add the class 'scroll' to fix the nav to the top
    $('.header').addClass('scroll');

  // Otherwise
  } else {
    // Remove the class 'scroll' from the .main-nav
    $('.header').removeClass('scroll');
  }
});

// When clicking on nav .news
  // scroll page to class .thenews
// When clicking on nav .videos
  // scroll page to .box2
// When clicking on nav .players
  // scroll page to class .lists


// When scrolling to class .box2
  // Continuously run video iframe


// When scrolling to class .box3
  // Flash images every 2 seconds
// When clicking on image
  // Change to next image

// When hover on image
  // add player name (need to add header)
// When hover off of image
  // remove player name


// When clicking on a li on .team1 or .team2
  // add css class
  // add player stats













