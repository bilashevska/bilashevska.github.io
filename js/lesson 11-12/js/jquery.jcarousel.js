/*! jCarousel - v0.3.4 - 2015-09-23
 * http://sorgalla.com/jcarousel/
 * Copyright (c) 2006-2015 Jan Sorgalla; Licensed MIT */
(function( $ ){

  $.fn.jcarousel = function() {
  
     var leftUIEl = $('.jcarousel-control-prev');
    var rightUIEl = $('.jcarousel-control-next');
    var elementsList = $('.jcarousel-list');

    var pixelsOffset = 300;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount-1) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.addClass('non-active');

    leftUIEl.click(function() {
      if (currentLeftValue != maximumOffset) {
        rightUIEl.removeClass('non-active');
        currentLeftValue += 300;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
      if(currentLeftValue == maximumOffset) {
        leftUIEl.addClass('non-active');
       }
    });

    rightUIEl.click(function() {
      if (currentLeftValue != minimumOffset) {
        leftUIEl.removeClass('non-active');
        currentLeftValue -= 300;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
      console.log(currentLeftValue);
      if(currentLeftValue == minimumOffset) {
        rightUIEl.addClass('non-active');
      }
    });

  };
})( jQuery );