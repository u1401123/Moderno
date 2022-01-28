$('.spollers__title').click(function (event) {
  if ($('.block__spollers').hasClass('one')) {
    $('.spollers__title').not($(this)).removeClass('active');
    $('.spollers__text').not($(this).next()).slideUp(300);
  }
  $(this).toggleClass('active').next().slideToggle(300);
});



