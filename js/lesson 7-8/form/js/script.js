/**
 * Created by user on 08.10.2016.
 */

$( function() {

  $("input").on("focusin", function (e) {

    e.preventDefault();

    $('<div class="tooltip"></div>').insertAfter($(this));
    $('.tooltip').text($(this).attr('title'));

  })

  $("input").on("focusout", function (e) {

    e.preventDefault();

    $('.tooltip').hide();
    $('.tooltip').remove();
  })

} );

