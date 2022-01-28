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