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

  
  
  refs.ScrDownButton.addEventListener('click', bottomFunction)

function bottomFunction() {
    refs.listSupportUkraine.scrollTop = 84; 
    // document.documentElement.Top = 84; // For Chrome, Firefox, IE and Opera
}

