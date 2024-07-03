$(document).ready(function () {
  // menu-bar  
  $(window).scroll(function () {
    sct = $(window).scrollTop();
    console.log(sct);
    if (sct <= 200) {
      $('header').removeClass('bg');
      $('.top_menu>a').css({
        color: '#fff'
      });
      $('.logo img').attr({
        src: "img/logo.png"
      });
      $('.arrow img').attr({
        src: "img/fa.png"
      });
      $('.join a').css({
        color: '#fff'
      });
    } else if (sct > 200) {
      $('header').addClass('bg');
      $('.top_menu>a').css({
        color: '#303ab2'
      });
      $('.logo img').attr({
        src: "img/logo2.png"
      });
      $('.arrow img').attr({
        src: "img/fa2.png"
      });
      $('.join a').css({
        color: '#303ab2'
      });
    }
  });
  // sub menu slide
  $('.top_menu').hover(function () {
    $(this).find('.sub_menu').stop().animate({
      opacity: 1
    }, 600);
  }, function () {
    $(this).find('.sub_menu').stop().animate({
      opacity: 0
    }, 600);
  });
  // title_wrap 
  $('.title_wrap>h1').delay(250).animate({
    top: 0,
    opacity: 1
  }, 800);
  $('.title_wrap>p').delay(800).animate({
    top: 0,
    opacity: 1
  }, 800);
  $('.title_wrap>.btn').delay(1000).animate({
    top: 0,
    opacity: 1
  }, 800);
  //mobile_menu
  $('.toggle').click(function () {
    $('.mobile_box').stop().fadeIn();
  });
  $('.close_btn').click(function () {
    $('.mobile_box').stop().fadeOut();
  });
  //main slide
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4300,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4300,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });
  //best slide
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //collection slide
  var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //tab best slide
  var swiper = new Swiper(".mySwiper_tab", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 4,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".mySwiper_mo", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".mySwiper_co", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".mySwiper5", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
//end