//===============================================================================
//ZOOM
//Для просмотра картинок при нажатии на нее
if ($('.gallery').length > 0) {
  baguetteBox.run('.gallery', {
    // Custom options
  });
}
//================================================================================

//===============================================================================
//паралакс эффект для главного экрана изображение fixed
//===============================================================================
$(window).scroll(function (event) {
  var s = 0 - $(this).scrollTop() / 3;
  $('.header__image').css('transform', 'translate3d(0, ' + s + 'px, 0)');
});
//===============================================================================

//================================================================================
//для работы меню бургера
//=================================================================================
$('.icon-menu').click(function (event) {
  $('.icon-menu, .menu__body').toggleClass('active');
  $('body').toggleClass('lock');
});

$('.menu__list').click(function (event) {
  $('.icon-menu, .menu__body').removeClass('active');
  $('body').removeClass('lock');
});

//==================================================================================

//===============================================================================
//Обработка menu
//===============================================================================
$('.menu__link').click(function (event) {
  //у всех убираем класс active
  $('.menu__link').removeClass('active');
  //у нажатой добавляем класс active
  $(this).addClass('active');

  // return false;
});
//===============================================================================

//===============================================================================
//Обработка фильтра в Portfolio
//===============================================================================
$('.filter__item').click(function (event) {
  var i = $(this).data('filter');
  if (i == 1) {
    //если выбран пункт 1 показываем все картинки
    $('.portfolio__column').show();
  } else {
    //если выбран пункт отличный от 1 показываем картинки в соответствии с i
    $('.portfolio__column').hide();//все скрыть
    $('.portfolio__column.f' + i).show();//показать в соответствии с i
  }
  //у всех убираем класс active
  $('.filter__item').removeClass('active');
  //у нажатой добавляем класс active
  $(this).addClass('active');

  return false;
});
//================================================================================

//================================================================================
//поддержка flex в IE11
//===============================================================================
$(window).resize(function (event) {
  mainblock();
});
function mainblock() {
  var h = $(window).outerHeight();
  $('.mainblock').css('min-height', h);
}
mainblock();
//===============================================================================

//=====================================================================================
//Плавная прокрутка до определенного в href места на странице c помощью класса goto
//======================================================================================
$(document).ready(function () {
  var margin = 10; // переменная, контролирующая докрутку
  $('.goto').click(function () { // тут писать условия, для всех ссылок или для конкретных
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - margin + "px" // .top+margin - ставим минус, если надо увеличить отступ
    }, {
      duration: 800, // регулируем скорость прокрутки
      easing: "easeOutQuart"
    });
    return false;
  });
});
//====================================================================================

//==================================================================================
//плавный переход к якорю
//==================================================================================
$(document).ready(function () {
  var margin = 0; // переменная, контролирующая докрутку
  $('a[href^="#"]').click(function () { // тут писать условия, для всех ссылок или для конкретных
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - margin + "px" // .top+margin - ставим минус, если надо увеличить отступ
    }, {
      duration: 800, // регулируем скорость прокрутки
      easing: "easeOutQuart"
    });
    return false;
  });
});
//==================================================================================

//===============================================================================
//для popup видео плагин magnificPopup
//===============================================================================
$('.popup__link').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,

  fixedContentPos: false
});
//===============================================================================

//===============================================================================
//для popup галереи magnificPopup
//===============================================================================
$('.gallery__item-inner').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    // titleSrc: function (item) {
    //   return item.el.attr('title') + '<small></small>';
    // }
  }
});
//==================================================================================