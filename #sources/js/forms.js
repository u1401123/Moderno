//FORMS
function forms() {

  //FIELDS
  $('input,textarea').focus(function () {
    if ($(this).val() == $(this).attr('data-value')) {
      $(this).addClass('focus');
      $(this).parent().addClass('focus');
      if ($(this).attr('data-type') == 'pass') {
        $(this).attr('type', 'password');
      };
      $(this).val('');
    };
    removeError($(this));
  });
  $('input[data-value], textarea[data-value]').each(function () {
    if (this.value == '' || this.value == $(this).attr('data-value')) {
      this.value = $(this).attr('data-value');
      if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
        $(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
      }
    }
    if (this.value != $(this).attr('data-value') && this.value != '') {
      $(this).addClass('focus');
      $(this).parent().addClass('focus');
      if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
        $(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
      }
    }

    $(this).click(function () {
      if (this.value == $(this).attr('data-value')) {
        if ($(this).attr('data-type') == 'pass') {
          $(this).attr('type', 'password');
        };
        this.value = '';
      };
    });
    $(this).blur(function () {
      if (this.value == '') {
        this.value = $(this).attr('data-value');
        $(this).removeClass('focus');
        $(this).parent().removeClass('focus');
        if ($(this).attr('data-type') == 'pass') {
          $(this).attr('type', 'text');
        };
      };
    });
  });
  $('.form-input__viewpass').click(function (event) {
    if ($(this).hasClass('active')) {
      $(this).parent().find('input').attr('type', 'password');
    } else {
      $(this).parent().find('input').attr('type', 'text');
    }
    $(this).toggleClass('active');
  });

  //$('textarea').autogrow({vertical: true, horizontal: false});


  //MASKS//
  //'+7(999) 999 9999'
  //'+38(999) 999 9999'
  //'+375(99)999-99-99'
  //'a{3,1000}' только буквы минимум 3
  //'9{3,1000}' только цифры минимум 3
  $.each($('input.phone'), function (index, val) {
    $(this).attr('type', 'tel');
    $(this).focus(function () {
      $(this).inputmask('+7(999) 999 9999', {
        clearIncomplete: true, clearMaskOnLostFocus: true,
        "onincomplete": function () { maskclear($(this)); }
      });
      $(this).addClass('focus');
      $(this).parent().addClass('focus');
      $(this).parent().removeClass('err');
      $(this).removeClass('err');
    });
  });
  $('input.phone').focusout(function (event) {
    maskclear($(this));
  });
  $.each($('input.num'), function (index, val) {
    $(this).focus(function () {
      $(this).inputmask('9{1,1000}', { clearIncomplete: true, placeholder: "", clearMaskOnLostFocus: true, "onincomplete": function () { maskclear($(this)); } });
      $(this).addClass('focus');
      $(this).parent().addClass('focus');
      $(this).parent().removeClass('err');
      $(this).removeClass('err');
    });
  });
  $('input.num').focusout(function (event) {
    maskclear($(this));
  });
  //CHECK
  $.each($('.check'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    }
  });
  $('body').off('click', '.check', function (event) { });
  $('body').on('click', '.check', function (event) {
    if (!$(this).hasClass('disable')) {
      var target = $(event.target);
      if (!target.is("a")) {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
          $(this).find('input').prop('checked', true);
        } else {
          $(this).find('input').prop('checked', false);
        }
      }
    }
  });

  //OPTION
  $.each($('.option.active'), function (index, val) {
    $(this).find('input').prop('checked', true);
  });
  $('.option').click(function (event) {
    if (!$(this).hasClass('disable')) {
      if ($(this).hasClass('active') && $(this).hasClass('order')) {
        $(this).toggleClass('orderactive');
      }
      $(this).parents('.options').find('.option').removeClass('active');
      $(this).toggleClass('active');
      $(this).children('input').prop('checked', true);
    }
  });
  //RATING
  $('.rating.edit .star').hover(function () {
    var block = $(this).parents('.rating');
    block.find('.rating__activeline').css({ width: '0%' });
    var ind = $(this).index() + 1;
    var linew = ind / block.find('.star').length * 100;
    setrating(block, linew);
  }, function () {
    var block = $(this).parents('.rating');
    block.find('.star').removeClass('active');
    var ind = block.find('input').val();
    var linew = ind / block.find('.star').length * 100;
    setrating(block, linew);
  });
  $('.rating.edit .star').click(function (event) {
    var block = $(this).parents('.rating');
    var re = $(this).index() + 1;
    block.find('input').val(re);
    var linew = re / block.find('.star').length * 100;
    setrating(block, linew);
  });
  $.each($('.rating'), function (index, val) {
    var ind = $(this).find('input').val();
    var linew = ind / $(this).parent().find('.star').length * 100;
    setrating($(this), linew);
  });
  function setrating(th, val) {
    th.find('.rating__activeline').css({ width: val + '%' });
  }
  //QUANTITY
  $('.quantity__btn').click(function (event) {
    var n = parseInt($(this).parent().find('.quantity__input').val());
    if ($(this).hasClass('dwn')) {
      n = n - 1;
      if (n < 1) { n = 1; }
    } else {
      n = n + 1;
    }
    $(this).parent().find('.quantity__input').val(n);
    return false;
  });
  //RANGE
  if ($("#range").length > 0) {
    $("#range").slider({
      range: true,
      min: 0,
      max: 5000,
      values: [0, 5000],
      slide: function (event, ui) {
        $('#rangefrom').val(ui.values[0]);
        $('#rangeto').val(ui.values[1]);
        $(this).find('.ui-slider-handle').eq(0).html('<span>' + ui.values[0] + '</span>');
        $(this).find('.ui-slider-handle').eq(1).html('<span>' + ui.values[1] + '</span>');
      },
      change: function (event, ui) {
        if (ui.values[0] != $("#range").slider("option", "min") || ui.values[1] != $("#range").slider("option", "max")) {
          $('#range').addClass('act');
        } else {
          $('#range').removeClass('act');
        }
      }
    });
    $('#rangefrom').val($("#range").slider("values", 0));
    $('#rangeto').val($("#range").slider("values", 1));

    $("#range").find('.ui-slider-handle').eq(0).html('<span>' + $("#range").slider("option", "min") + '</span>');
    $("#range").find('.ui-slider-handle').eq(1).html('<span>' + $("#range").slider("option", "max") + '</span>');

    $("#rangefrom").bind("change", function () {
      if ($(this).val() * 1 > $("#range").slider("option", "max") * 1) {
        $(this).val($("#range").slider("option", "max"));
      }
      if ($(this).val() * 1 < $("#range").slider("option", "min") * 1) {
        $(this).val($("#range").slider("option", "min"));
      }
      $("#range").slider("values", 0, $(this).val());
    });
    $("#rangeto").bind("change", function () {
      if ($(this).val() * 1 > $("#range").slider("option", "max") * 1) {
        $(this).val($("#range").slider("option", "max"));
      }
      if ($(this).val() * 1 < $("#range").slider("option", "min") * 1) {
        $(this).val($("#range").slider("option", "min"));
      }
      $("#range").slider("values", 1, $(this).val());
    });
    $("#range").find('.ui-slider-handle').eq(0).addClass('left');
    $("#range").find('.ui-slider-handle').eq(1).addClass('right');
  }
  //ADDFILES
  $('.form-addfile__input').change(function (e) {
    if ($(this).val() != '') {
      var ts = $(this);
      ts.parents('.form-addfile').find('ul.form-addfile-list').html('');
      $.each(e.target.files, function (index, val) {
        if (ts.parents('.form-addfile').find('ul.form-addfile-list>li:contains("' + e.target.files[index].name + '")').length == 0) {
          ts.parents('.form-addfile').find('ul.form-addfile-list').append('<li>' + e.target.files[index].name + '</li>');
        }
      });
    }
  });
}
forms();

function digi(str) {
  var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  return r;
}

//VALIDATE FORMS
$('form button[type=submit]').click(function () {
  var er = 0;
  var form = $(this).parents('form');
  var ms = form.data('ms');
  $.each(form.find('.req'), function (index, val) {
    er += formValidate($(this));
  });
  if (er == 0) {
    removeFormError(form);
    /*
      var messagehtml='';
    if(form.hasClass('editprofile')){
      var messagehtml='';
    }
    formLoad();
    */

    //ОПТРАВКА ФОРМЫ
    /*
    function showResponse(html){
      if(!form.hasClass('nomessage')){
        showMessage(messagehtml);
      }
      if(!form.hasClass('noclear')){
        clearForm(form);
      }
    }
    var options={
      success:showResponse
    };
      form.ajaxForm(options);
    	
    
    setTimeout(function(){
      if(!form.hasClass('nomessage')){
        //showMessage(messagehtml);
        showMessageByClass(ms);
      }
      if(!form.hasClass('noclear')){
        clearForm(form);
      }
    },0);
    
    return false;
    */

    if (ms != null && ms != '') {
      showMessageByClass(ms);
      return false;
    }
  } else {
    return false;
  }
});
function formValidate(input) {
  var er = 0;
  var form = input.parents('form');
  if (input.attr('name') == 'email' || input.hasClass('email')) {
    if (input.val() != input.attr('data-value')) {
      var em = input.val().replace(" ", "");
      input.val(em);
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.val())) || input.val() == input.attr('data-value')) {
      er++;
      addError(input);
    } else {
      removeError(input);
    }
  } else {
    if (input.val() == '' || input.val() == input.attr('data-value')) {
      er++;
      addError(input);
    } else {
      removeError(input);
    }
  }
  if (input.attr('type') == 'checkbox') {
    if (input.prop('checked') == true) {
      input.removeClass('err').parent().removeClass('err');
    } else {
      er++;
      input.addClass('err').parent().addClass('err');
    }
  }
  if (input.hasClass('name')) {
    if (!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))) {
      er++;
      addError(input);
    }
  }
  if (input.hasClass('pass-2')) {
    if (form.find('.pass-1').val() != form.find('.pass-2').val()) {
      addError(input);
    } else {
      removeError(input);
    }
  }
  return er;
}
function formLoad() {
  $('.popup').hide();
  $('.popup-message-body').hide();
  $('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
  $('.popup-message').addClass('active').fadeIn(300);
}
function showMessageByClass(ms) {
  $('.popup').hide();
  popupOpen('message.' + ms, '');
}
function showMessage(html) {
  $('.popup-loading').remove();
  $('.popup-message-body').show().html(html);
}
function clearForm(form) {
  $.each(form.find('.input'), function (index, val) {
    $(this).removeClass('focus').val($(this).data('value'));
    $(this).parent().removeClass('focus');
    if ($(this).hasClass('phone')) {
      maskclear($(this));
    }
  });
}
function addError(input) {
  input.addClass('err');
  input.parent().addClass('err');
  input.parent().find('.form__error').remove();
  if (input.hasClass('email')) {
    var error = '';
    if (input.val() == '' || input.val() == input.attr('data-value')) {
      error = input.data('error');
    } else {
      error = input.data('error');
    }
    if (error != null) {
      input.parent().append('<div class="form__error">' + error + '</div>');
    }
  } else {
    if (input.data('error') != null && input.parent().find('.form__error').length == 0) {
      input.parent().append('<div class="form__error">' + input.data('error') + '</div>');
    }
  }
  if (input.parents('.select-block').length > 0) {
    input.parents('.select-block').parent().addClass('err');
    input.parents('.select-block').find('.select').addClass('err');
  }
}
function addErrorByName(form, input__name, error_text) {
  var input = form.find('[name="' + input__name + '"]');
  input.attr('data-error', error_text);
  addError(input);
}
function addFormError(form, error_text) {
  form.find('.form__generalerror').show().html(error_text);
}
function removeFormError(form) {
  form.find('.form__generalerror').hide().html('');
}
function removeError(input) {
  input.removeClass('err');
  input.parent().removeClass('err');
  input.parent().find('.form__error').remove();

  if (input.parents('.select-block').length > 0) {
    input.parents('.select-block').parent().removeClass('err');
    input.parents('.select-block').find('.select').removeClass('err').removeClass('active');
    //input.parents('.select-block').find('.select-options').hide();
  }
}
function removeFormErrors(form) {
  form.find('.err').removeClass('err');
  form.find('.form__error').remove();
}
function maskclear(n) {
  if (n.val() == "") {
    n.inputmask('remove');
    n.val(n.attr('data-value'));
    n.removeClass('focus');
    n.parent().removeClass('focus');
  }
}
function searchselectreset() {
  $.each($('.select[data-type="search"]'), function (index, val) {
    var block = $(this).parent();
    var select = $(this).parent().find('select');
    if ($(this).find('.select-options__value:visible').length == 1) {
      $(this).addClass('focus');
      $(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
      $(this).find('.select-title__value').val($('.select-options__value:visible').html());
      $(this).find('.select-title__value').attr('data-value', $('.select-options__value:visible').html());
    } else if (select.val() == '') {
      $(this).removeClass('focus');
      block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
      block.find('input.select-title__value').attr('data-value', select.find('option[selected="selected"]').html());
    }
  });
}