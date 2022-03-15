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
//для кнопки вверх страницы
$().UItoTop({ easingType: 'easeOutQuart' });
//==================================================================================
if ($('.slider__inner').length > 0) {
  $('.slider__inner').slick({
    infinite: true,//зацикливание
    dots: true,
    arrows: false,
    accessibility: false,
    slidesToShow: 1,
    slidesToScroll: 1,//сколько слайдов пролистывать за одно нажатие
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    touchThreshold: 15,//какую часть слайда надо просвайпить чтобы перелистнуть
    responsive: [{
      breakpoint: 768,
      settings: {

      }
    }]
  });
}
//================================================================================
//для работы меню бургера
//=================================================================================
$('.icon-menu').click(function (event) {
  $('.icon-menu, .menu__list').toggleClass('active');
  $('body').toggleClass('lock');
});

//==================================================================================



//==================================================================================
// tabs
//==================================================================================
$('body').on('click', '.tab__navitem', function (event) {
  var eq = $(this).index();
  if ($(this).hasClass('parent')) {
    var eq = $(this).parent().index();
  }
  if (!$(this).hasClass('active')) {
    $(this).closest('.tabs').find('.tab__navitem',).removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
  }
});

$('body').on('click', '.tab__navitem1', function (event) {
  var eq = $(this).index();
  if ($(this).hasClass('parent')) {
    var eq = $(this).parent().index();
  }
  if (!$(this).hasClass('active')) {
    $(this).closest('.tabs').find('.tab__navitem1',).removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tabs').find('.tab__item1').removeClass('active').eq(eq).addClass('active');
  }
});


//===========================================================================
var mixer = mixitup('.products__row');