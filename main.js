// Avvio dello script
$(document).ready(
  // Arrow function (left, right)
  function() {
    var arrowRight = $('.next');
    console.log(arrowRight);
    arrowRight.click(function() {
      slideNext();
    });
    var arrowPrev = $('.prev');
    arrowPrev.click(function() {
      slidePrev();
    });

    // Keyboard function
    $(document).keydown(
      function() {
        if (event.which == 39) {
          slideNext();
        } else if (event.which == 37) {
          slidePrev();
        }
      }
    )
  }
);

// GENERAL FUNCTIONS (SLIDER)
// Slide next function
function slideNext() {
  var activeImage = $('img.active');
  var nextImage = activeImage.next();
  var activeCircle = $('.nav > i.active');
  var nextCircle = activeCircle.next();
  if (activeImage.hasClass('last') == true && activeCircle.hasClass('last') == true) {
    nextImage = $('img.first');
    nextCircle = $('i.first');
  }
  activeImage.removeClass('active');
  nextImage.addClass('active');
  activeCircle.removeClass('active');
  nextCircle.addClass('active');
}

// Slide prev function
function slidePrev() {
  var activeImage = $('img.active');
  var prevImage = activeImage.prev();
  var activeCircle = $('.nav > i.active');
  var prevCircle = activeCircle.prev();
  if (activeImage.hasClass('first') == true && activeCircle.hasClass('first') == true) {
    prevImage = $('img.last');
    prevCircle = $('i.last');
  }
  activeImage.removeClass('active');
  prevImage.addClass('active');
  activeCircle.removeClass('active');
  prevCircle.addClass('active');
}
