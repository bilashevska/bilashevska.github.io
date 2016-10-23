/**
 * Created by user on 20.10.2016.
 */
$(function() {

  $('.jquery').iCheck({
    checkboxClass: 'icheckbox_square-aero',
  });
  $(".basic-single").select2();


  $('.jcarousel').jcarousel();

  $('.jcarousel-control-prev')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '-=1'
    });

  $('.jcarousel-control-next')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '+=1'
    });

  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .jcarouselPagination();



  $( '.dropdown' ).hover(
    function(){
      $(this).children('.sub-menu').slideDown(200);
    },
    function(){
      $(this).children('.sub-menu').slideUp(200);
    }
  )



  var $links = $('.self-menu a');

  $links.on('click', function (e) {
    var $submenu = $(this).siblings('.self-sub-menu');
    var left = parseInt($(this).position().left + 15);

    $('.self-sub-menu').hide();

    e.preventDefault();
    $submenu.css('left',left+'px');
    $submenu.slideToggle();

    }
  )
}
)
