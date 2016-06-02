//
$(function (){
   'use strict';
    var myheader = $('.header');
   var myslider = $('.bxslider');
   myheader.height($(window).height());
   $(window).resize(function (){
       myheader.height($(window).height());
       myslider.each(function (){
      $(this).css('paddingTop',($(window).height()-$('.bxslider li').height())/2) ;
   });
   });
   
   //links Active class
   $('.links li a').click(function (){
      $(this).parent().addClass('active').siblings().removeClass('active') ;
   });
   
   myslider.each(function (){
      $(this).css('paddingTop',($(window).height()-$('.bxslider li').height())/2) ;
   });
   
    myslider.bxSlider({
        pager:false
    });
    
  // smooth scroll to div
  $('.links li a').click(function (){
     
      $('html,body').animate({
          scrollTop:$('#'+$(this).data('value')).offset().top
          
      },1000);
  });
  
  // Our Auto slider Code
        (function autoslider(){
            $('.slider .active').each(function (){
               if(!$(this).is(':last-child')) {
                   $(this).delay(3000).fadeOut(1000,function (){
                       $(this).removeClass('active').next().addClass('active').fadeIn();
                       autoslider();
                   });
               }
               else{
                   $(this).delay(3000).fadeOut(1000,function (){
                      $(this).removeClass('active');
                      $('.slider div').eq(0).addClass('active').fadeIn();
                      autoslider();
                   });
               }
            });
        }());
        
        // Trigger Mixit UP
        $('#container').mixItUp();
        //Adjust shuffle links
        $('.shuffle li').click(function (){
            $(this).addClass('selected').siblings().removeClass('selected');
        });
        
        //Trigger nice scroll
        $('html').niceScroll({
            cursorcolor : '#1abc9c',
            cursorwidth : '10px',
            cursorborder : '1px solod #1abc9c'
            
        });
        
});