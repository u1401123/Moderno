//================================================================================
//для работы меню бургера
//=================================================================================
$('.icon-menu').click(function (event) {
  $('.icon-menu, .menu__list').toggleClass('active');
  $('body').toggleClass('lock');
});

$('.menu__link').click(function (event) {
  $('.icon-menu, .menu__list').removeClass('active');
  $('body').removeClass('lock');
});
