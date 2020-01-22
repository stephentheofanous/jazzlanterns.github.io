
// MY HOVER BG GRADIENT
var body = document.getElementById("my-gradient");
var aboot =document.getElementById("about");

function dft() {
 
  body.style.background = "url('img/lantern_trans.png') center 91% / 81px 148.5px no-repeat, radial-gradient(circle at 50% 84%, rgba(255,249,162,0.9) 0%, rgba(255,97,0,0.9) 0.5%,  rgba(0,0,0,0.9) 30%)";
  aboot.style.background = "radial-gradient(circle at 50% -30%, rgba(255,97,0,0.9) 0%,  rgba(0,0,0,0.9) 30%)";
}

function dim() {
 
  body.style.background = "url('img/lantern_trans.png') center 91% / 81px 148.5px no-repeat, radial-gradient(circle at 50% 84%, rgba(255,249,162,0.9) 0%, rgba(255,97,0,0.9) 0.5%,  rgba(0,0,0,0.9) 20%)";
  aboot.style.background = "radial-gradient(circle at 50% -50%, rgba(255,97,0,0.9) 0%,  rgba(0,0,0,0.9) 30%)";
  // setTimeout(function() { glow(); }, 1000);
}

function glow() {
  
  body.style.background = "url('img/lantern_trans.png') center 91% / 81px 148.5px no-repeat, radial-gradient(circle at 50% 84%, rgba(255,249,162,0.9) 0%, rgba(255,97,0,0.9) 2%,  rgba(0,0,0,0.9) 40%)";
  aboot.style.background = "radial-gradient(circle at 50% -30%, rgba(255,97,0,0.9) 0%,  rgba(0,0,0,0.9) 40%)";
}

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100 
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 150) {
      $("#mainNav").addClass("navbar-shrink"); 
      $(glow);
    } else {
      $("#mainNav").removeClass("navbar-shrink"); 
      $(dft);
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict