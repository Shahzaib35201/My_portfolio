$(document).ready(function() {

    var pbAlreadyLoaded = false;

    $('.skills-rating').waypoint(function(direction){
        if (!pbAlreadyLoaded) {
            progressBar('.inner-meter.html5', 85);
            progressBar('.inner-meter.photoshop', 70);
            progressBar('.inner-meter.js-jquery', 74);
            progressBar('.inner-meter.wordpress', 67);
            progressBar('.inner-meter.php-mysql', 77);
            progressBar('.inner-meter.react-redux', 55);
            pbAlreadyLoaded = true;
        }
    }, {
        offset : '100%'
    });



    function progressBar(elem, maxRate){
//        var pbClassName = targetClass;
        var elem = $(elem);
        var pbMinPercent = 1;
        var id = setInterval(frame, 15);

        function frame() {
            if(pbMinPercent >= maxRate){
                clearInterval(id);
            } else {
                pbMinPercent++;
                $(elem).css('width', pbMinPercent + '%');
            }
        }
    }

    // smooth scroll on target click
    // using https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 100, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });

    // mobile menu toggle
    $('.toggle').click(function() {
      $('.toggle').toggleClass('toggle-active');
      $('#overlay').toggleClass('nav-active');
    });

    // Lity lightbox
    $('.project-thumbnails').attr('data-lity', '');
});


const upIcon = document.getElementById("upIcon");


window.onscroll = function (){

  scrollFunction();
}


function scrollFunction(){

  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    upIcon.style.display = "block";
  }else{
    upIcon.style.display = "none";
  }
}

function backToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

