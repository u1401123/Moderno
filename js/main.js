//подключение кусков кода в файлах .js
//=====================================================================================================

//=====================================================================================================



$(function ($) {
  'use strict';
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
  function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
  }
  if (isIE()) {
    $('body').addClass('ie');
  }
  if (isMobile.any()) {
    $('body').addClass('touch');
  }

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
  var active = "click";
  if (isMobile.iOS()) {
    var active = "touchstart";
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



$('.spollers__title').click(function (event) {
  if ($('.block__spollers').hasClass('one')) {
    $('.spollers__title').not($(this)).removeClass('active');
    $('.spollers__text').not($(this).next()).slideUp(300);
  }
  $(this).toggleClass('active').next().slideToggle(300);
});




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



const menu = document.querySelector('.nav'),
  burger = document.querySelector('.burger'),
  mobileBack = document.querySelector('.mobile-back'),
  overlay = document.querySelector('.overlay');

const lockScroll = () => {
  document.body.classList.add('lock');
}

const unlockScroll = () => {
  document.body.classList.remove('lock');
}

const initialMenu = () => {
  document.querySelector('.nav__list--dropdown').classList.remove('transformation');
  document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
  // scrollTop();
}

const scrollTop = () => {
  menu.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
  burger.classList.toggle('active');
  document.body.classList.toggle('lock');
  initialMenu();
});


overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.classList.remove('open');
  unlockScroll();
});

menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link--drop')) {
    e.preventDefault();
    e.target.closest('.nav__list').classList.add('transformation');
    e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
    // scrollTop();
  }

  if (e.target.classList.contains('mobile-back__link')) {
    e.preventDefault();
    e.target.closest('.nav__list--dropdown').classList.remove('transformation');
    e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
    // scrollTop();
  }

  if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
    e.preventDefault();
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  }
});

