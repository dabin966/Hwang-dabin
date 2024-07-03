$(document).ready(function(){
  
  // pc gnb sub menu display block
	function siteMapOpen(){
		$('#hd').addClass('map-open');
	}
	function siteMapClose(){
		$('#hd').removeClass('map-open');
		$('.gnb>li').removeClass('on');
	}
	function gnbEffect(){
    // mouseover color,underline 
      $('.gnb>li').on('mouseover', function () {
        $(this).addClass('on').siblings().removeClass('on')
        }).on('mouseleave', function () {
        $('.gnb>li').removeClass('on')      
        })
      // site-inner menu hover -> gnb li color,underline 
      $('.sitemap-inner>li').on('mouseover', function () {
        var num = $(this).index();
          $('.gnb>li').eq(num).addClass('on');
        }).on('mouseleave', function () {
          var num = $(this).index();
          $('.gnb>li').eq(num).removeClass('on');
        })	
      }
    $('.gnb>li').on('mouseover',siteMapOpen);
    $('.sitemap').on('mouseleave',siteMapClose);
    $('.gnb>li>a').on('focus',siteMapOpen);
    $('#hd>.logo a').on('focus',siteMapClose);	
    
	  gnbEffect();
    //header scroll bg add
    $(window).scroll(function(){
        sct = $(window).scrollTop();
        console.log(sct);
        if(sct <=200){
            $('body').removeClass('is-scroll');         
            $('.logo img').attr({
                src:"img/logo.png"
            });
            $('.toggle img').attr({
                src:"img/toggle.png"
            });       
        }else if(sct>200){
            $('body').addClass('is-scroll');                              
            $('.logo img').attr({
                src:"img/logo_ho.png"
            });
            $('.toggle img').attr({
                src:"img/toggle_ho.png"
            });          
        }   
    });
    //search box
    $('.search li').eq(0).click(function(){
        $('.search li').removeClass('active')
        $(this).addClass('active');
    });
    $('.search li').eq(1).click(function(){
        $('.search li').removeClass('active')
        $(this).addClass('active');
    });
    //count up
    $(".counter").each(function(index){
		setTimeout(function() {
			$(".counter2-"+ (index+1)).counterUp({
				delay: 10,
				time: 1000
			});
		},1800 + (index * 200))
	});
    //section_3 배경이미지

    $('.se_3_co_box').eq(0).mouseenter(function() {   
      $('.se_3_bg_box').css('background-image','url(img/se3_bg_box_1.jpg)');
    });
    $('.se_3_co_box').eq(1).mouseenter(function() {        
      $('.se_3_bg_box').css('background-image','url(img/se3_bg_box_2.jpg)');
    });    
    $('.se_3_co_box').eq(2).mouseenter(function() {          
      $('.se_3_bg_box').css('background-image','url(img/se3_bg_box_3.jpg)');
    });       
    $('.se_3_co_box').mouseleave(function() {
      $('.se_3_bg_box').removeAttr('style');
      });
        //section_1 slide

        var swiper = new Swiper(".mySwiper", {
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
      //top btn
      $('.top_btn').click(function(){
        $('html').animate({
            scrollTop:0
        });
    });
    //family site
    var i =0;
        $('.fa_wrap').click(function(){
            if(i == 0){
                $('.sub_fa').stop().show();
                i++;
            }else if(i == 1){
                $('.sub_fa').stop().hide();
                i=0;
            }                      
        });
        //product slide
        var swiper = new Swiper(".mySwiper2", {
            spaceBetween: 30,        
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },         
          });
          //mobile menu 나타나기
          $('#hd .toggle').click(function(){
            $('#hd .lnb_grid').css({
                opacity:1,
                display:'block'
            });
            $('#hd .lnb_wrap').animate({
                right:0,              
            },300);
            $(this).css({
               zIndex:9
            });
          });
          $('.menu-close-btn').click(function(){
            $('#hd .lnb_grid').css({
                opacity:0,
                display:'none'
            },300);
            $('#hd .lnb_wrap').animate({
                right:-640
            },300);           
            $('#hd .toggle').css({
                zIndex:999
             });
          });
          //mobile 아코디언 메뉴     
        $(".dp1").click(function() {    
           $(this).next(" .dp2").stop().slideToggle(300);
           $(this).next(" .dp2").siblings(" .dp2").slideUp(300); // 1개씩 펼치기
         });    
         $('.dp1').click(function(){
            if($(this).hasClass('active')){
                   $('.dp1').removeClass('active');         
            } else {
                   $('.dp1').removeClass('active');     
                   $(this).addClass('active');     
            }     
      }); 
});//end