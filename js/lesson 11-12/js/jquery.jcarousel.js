(function( $ ){

  $.fn.jcarousel = function() {
  
    var leftUIEl = $('.jcarousel-control-prev');
    var rightUIEl = $('.jcarousel-control-next');
    var elementsList = $('.jcarousel-list');

    var pixelsOffset = 300;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;


    leftUIEl.click(function() {
      if (currentLeftValue !== maximumOffset) {
        currentLeftValue += 300;
      } else {
        currentLeftValue = minimumOffset;
      }
      elementsList.animate({ left : currentLeftValue + "px"}, 500);
    });

    rightUIEl.click(function() {
      if (currentLeftValue !== minimumOffset) {
        currentLeftValue -= 300;
      } else {
        currentLeftValue = maximumOffset;
      }
      elementsList.animate({ left : currentLeftValue + "px"}, 500);
    });

  };
})( jQuery );