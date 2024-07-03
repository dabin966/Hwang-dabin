$(document).ready(function(){
  
  $('.phone .content').hide().eq(0).show();
  $('nav ul li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.phone .content').stop().fadeOut(600);
    $('#'+$(this).attr('data-alt')).stop().fadeIn(600);
  });

});
//end