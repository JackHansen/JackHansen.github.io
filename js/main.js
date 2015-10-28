// When hovering over each of navs
  // Add class .fontsize
// When NOT hovering
  // Remove class .fontsize

$('li a').hover(function () {
  $(this).addClass('fontsize');
}, function () {
  $(this).removeClass('fontsize');
});

$('.espn').hover(function () {
  $(this).addClass('colors');
}, function () {
  $(this).removeClass('colors');
});

$('.cbs').hover(function () {
  $(this).addClass('colors');
}, function () {
  $(this).removeClass('colors');
});

$('.yahoo').hover(function () {
  $(this).addClass('colors');
}, function () {
  $(this).removeClass('colors');
});

$('.bleacher').hover(function () {
  $(this).addClass('colors');
}, function () {
  $(this).removeClass('colors');
});


// When scrolling down the page
$(window).on('scroll', (function(){
    var playVideo = true
    return (function() {
      var scrollTop = $(window).scrollTop();
      manageStickyNav(scrollTop);
      // manageVideoPlayer(scrollTop, playVideo);
      (function() {
        var videoCenter = $('.box2').offset().top - 300;
          // When the distance from the top of the page to where the user has scrolled is >= the distance from the stickyNavTop
        if(playVideo && (scrollTop >= videoCenter)) {
          // rather than just alert simulate a click event on the iframe to trigger the video! \o/
          playVideo = false;
        }
      })()
    })
  })()
);



var stickyNavTop = $('.header').offset().top;

function manageStickyNav(scrollTop){
  // Determine the distance from the top of the .header to the top of the page
  
    // When the distance from the top of the page to where the user has scrolled is >= the distance from the stickyNavTop
  if( scrollTop >= stickyNavTop ) {

    // Add the class 'scroll' to fix the nav to the top
    $('.header').addClass('scroll');

  // Otherwise
  } else {
    // Remove the class 'scroll' from the .main-nav
    $('.header').removeClass('scroll');
  }
}




// When scrolling to class .box3
  // Flash images every 2 seconds
// When clicking on image
  // Change to next image

// When hover on image
  // add player name (need to add header)
// When hover off of image
  // remove player name



 var images=['img/nfl players/matt forte.jpeg', 'img/nfl players/andrew luck.jpeg', 'img/nfl players/ben rothlesburger.jpeg', 'img/nfl players/cam newton.jpeg', 'img/nfl players/dez bryant.jpeg', 'img/nfl players/eddie lacy.jpeg', 'img/nfl players/eli manning.jpeg', 'img/nfl players/giants.jpeg', 'img/nfl players/gronk.jpeg', 'img/nfl players/jamaal charles.jpeg', 'img/nfl players/jay cutler.jpeg', 'img/nfl players/jjwatt.jpeg', 'img/nfl players/Larry Fitzgerald.jpeg', 'img/nfl players/marshawn lynch.jpeg','img/nfl players/odell.jpg', 'img/nfl players/peyton manning.jpeg', 'img/nfl players/ryan tannehill.jpeg', ];
 
 var currentPosition = 0;

 // EVENTS ---------

// Listen for click events on the next and previous buttons, nextImage is calling the function
$('.pictures').on('mouseover', nextImage);

// FUNCTIONS ---------

function nextImage(){
  // if current position = last image (hint: currentPosition === images.length - 1 )
  if (currentPosition === images.length - 1) {
    // set currentPosition to 0
    currentPosition = 0 
  } else {
    // Update the current position
    currentPosition += 1;
  }
  // Update the src attribute to the urls that's stored at the currentPosition in the array
  $('.pictures').attr('src', images[currentPosition]);
}










