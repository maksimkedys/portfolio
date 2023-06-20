
$(function () {

  $('.menu__btn, .menu__link').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active')
    $('.menu__list').toggleClass('menu__list--active')
  });

  

  $(".menu__link, .logo, .header__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  $(window).on('scroll', function () {
    $('.menu').toggleClass('scroll', $(window).scrollTop() > 0);
  });

  var mixer = mixitup('.portfolio__works', {
    "animation": {
      "duration": 500,
      "nudge": false,
      "reverseOut": true,
      "effects": "fade"
    }
  });
});
