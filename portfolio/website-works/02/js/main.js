$(document).ready(function(){
    //mobile_menu
    $('.toggle').click(function(){
      $('.mo_menu_box').stop().fadeIn();
    });
    $('.mo_close_btn').click(function(){
      $('.mo_menu_box').stop().fadeOut();
    });  
  //  section_5 ball show hide 
    $('.ball').eq(0).click(function(){
        $('.click_box').hide();
        $('.click_box1').show();
    });
    $('.ball').eq(1).click(function(){
        $('.click_box').hide();
        $('.click_box2').show();
    });
    $('.ball').eq(2).click(function(){
        $('.click_box').hide();
        $('.click_box3').show();
    });
    $('.ball').eq(3).click(function(){
        $('.click_box').hide();
        $('.click_box4').show();
    });
    $('.ball').eq(4).click(function(){
        $('.click_box').hide();
        $('.click_box5').show();
    });
    $('.ball').eq(5).click(function(){
        $('.click_box').hide();
        $('.click_box6').show();
    });
    $('.ball').eq(6).click(function(){
        $('.click_box').hide();
        $('.click_box7').show();
    });
    // section_3 best seller slider
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 1.6,
        spaceBetween:20,
        centeredSlides: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
      });
});//end