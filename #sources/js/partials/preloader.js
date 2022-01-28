"use strict";

window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('active');
  setInterval(function () {
    preloader.classList.remove('active');
    preloader.classList.add('no-active');//во время работы раскомментировать
  }, 990);
}


