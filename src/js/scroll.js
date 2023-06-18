import { refs } from './refs';

$(function() {
    $.fn.scrollToTop = function() {
     $(this).hide().removeAttr("href");
     if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
     const scrollDiv = $(this);
     $(window).scroll(function() {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
     });
     $(this).click(function() {
      $("html, body").animate({scrollTop: 0}, "slow")
     })
    }
   });
   
   $(function() {
    $("#go-top").scrollToTop();
   });


   refs.ScrDownBtn.addEventListener('click', onScrollSmooth)
   
   function onScrollSmooth () { 
    const { height: cardHeight } = refs.listSuportUkraine.firstElementChild.getBoundingClientRect();
    
   refs.listSuportUkraine.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
    }