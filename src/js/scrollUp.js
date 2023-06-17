import { refs } from './refs';

function scrollUp () {
    refs.mybutton.addEventListener('click', topFunction)
    window.onscroll = function() {scrollFunction()}
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            refs.mybutton.style.display = "block";
        } else {
            refs.mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }
}
scrollUp ()