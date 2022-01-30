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


