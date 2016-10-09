/**
 * Created by user on 08.10.2016.
 */
// $(function ( ) {
//
// var links = $(" a");
//
//   links.on('click', function (e) {
//     var $submenu = $(this).siblings('.submenu');
//
//     e.preventDefault();
//     console.log('$submenu', $submenu);
//     $submenu.slideToggle();
//   });
// });

$(function(){

  var tabs = $('.wrapper');

  $('.tabs-content > div', tabs).each(function(i){
    if ( i != 0 )$(this).hide(0)
  });

  tabs.on('click', '.tabs a', function(e){
    /* Предотвращаем стандартную обработку клика по ссылке */
    e.preventDefault();

    /* Узнаем значения ID блока, который нужно отобразить */
    var tabId = $(this).attr('href');

    /* Удаляем все классы у якорей и ставим active текущей вкладке */
    $('.tabs a',tabs).removeClass();
    $(this).addClass('active');

    /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
    $('.tabs-content > div', tabs).hide(0);
    $(tabId).show();
  });
});
