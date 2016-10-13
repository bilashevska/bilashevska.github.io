/**
 * Created by user on 08.10.2016.
 */

$( function() {

  $('button').on('click', function (e) {

    e.preventDefault();

    for (i = 0; i< 3;i++){

      $('.tooltip').eq(i).remove();
      $('<div class="tooltip"></div>').insertAfter($('input').eq(i));
      $('.tooltip').eq(i).text($('input').eq(i).attr('data-title'));

    }

  })

  $("input").hover(
    function (e) {
      e.preventDefault();

      $('.tooltip').hide();
      $('.tooltip').remove();

      $('<div class="tooltip"></div>').insertAfter($(this));
      $('.tooltip').text($(this).attr('data-title'));
    },
    function (e) {
      e.preventDefault();

      $('.tooltip').hide();
      $('.tooltip').remove();
    }
  )
  //The second type of solving
    // $("input").on('mouseenter', function (e) {

    //e.preventDefault();

  //   $('.tooltip').hide();
  //   $('.tooltip').remove();
  //
  //   $('<div class="tooltip"></div>').insertAfter($(this));
  //   $('.tooltip').text($(this).attr('data-title'));
  //
  // })

  // $("input").on("mouseleave", function (e) {
  //
  //   e.preventDefault();
  //
  //   $('.tooltip').hide();
  //   $('.tooltip').remove();
  //
  // })


  })


