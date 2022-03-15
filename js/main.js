//подключение кусков кода в файлах .js
//=====================================================================================================
//=====================================================================================================



$(function ($) {
  'use strict';
  var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
  if (isMobile.any()) { }

  if (location.hash) {
    var hsh = location.hash.replace('#', '');
    if ($('.popup-' + hsh).length > 0) {
      popupOpen(hsh);
    } else if ($('div.' + hsh).length > 0) {
      $('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
    }
  }
  $('.wrapper').addClass('loaded');

  var act = "click";
  if (isMobile.iOS()) {
    var act = "touchstart";
  }

function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}
ibg();

$(document).on('click touchstart', function (e) {
  if (!$(e.target).is(".select *")) {
    $('.select').removeClass('active');
  };
});



//SLIDERS
if ($('.gallery').length > 0) {
  $('.gallery').slick({
    infinite: true,//зацикливание
    dots: false,
    arrows: false,
    accessibility: false,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    touchThreshold: 15,//какую часть слайда надо просвайпить чтобы перелистнуть
    asNavFor: '.gallery2',
    responsive: [{
      breakpoint: 768,
      settings: {

      }
    }]
  });
}

if ($('.gallery2').length > 0) {
  $('.gallery2').slick({
    infinite: true,//зацикливание
    dots: true,
    arrows: true,
    accessibility: false,
    slidesToShow: 3,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    asNavFor: '.gallery',
    centerMode: true,//выстраивает слайд по центру
    touchThreshold: 15,//какую часть слайда надо просвайпить чтобы перелистнуть
    responsive: [{
      breakpoint: 992.98,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    }]
  });
}



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

//===========================================================================
var mixer = mixitup('.products__row');
}($));
"use strict";

window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('active');
  setInterval(function () {
    preloader.classList.remove('active');
    preloader.classList.add('no-active');//во время работы раскомментировать
  }, 990);
}


