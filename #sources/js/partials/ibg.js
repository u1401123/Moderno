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