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
