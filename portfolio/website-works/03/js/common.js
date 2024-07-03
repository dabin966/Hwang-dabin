$(document).ready(function(){
  // fullpage setting 
    $("#full-page").fullpage({
        anchors:["1st","2st","3st","4st","5st","6st","7st"],
        navigation:true,
        slide:true,
        slidesNavigation:true,
        navigationPosition:'right',
        scrollingSpeed:1000
    });
    //  section_3 tab menu
    $('.con_tab li').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active')
      $('.cbox').hide(800);
      $('#' + $(this).attr('data-alt')).show(800);
    });
    //section_4 slide
    var bullet = ['키친','바스','도어','벽바닥재','중문','빌트인가구'];
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
          },
      },
    });
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 4.5,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,       
      });    
});