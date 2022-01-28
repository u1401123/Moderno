


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


