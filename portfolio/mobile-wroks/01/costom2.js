$(document).ready(function(){
  // intro 
    setTimeout(function(){
      $('.welcome-section').fadeOut();
      $('.wrap').fadeIn();
    },2400)
    // main-tab-menu
    $('.tab-menu a').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.tab-content').fadeOut();
      $('#'+$(this).attr('data-alt')).fadeIn();
    });
    // slide-popular
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      leftedSlides: true,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
    var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 4,
      spaceBetween: 10,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
    var swiper = new Swiper(".mySwiper3", {
      slidesPerView: 2,
      spaceBetween: 30,
      leftedSlides: true,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
});
//end
