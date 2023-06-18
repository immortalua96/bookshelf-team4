import { refs } from './refs';

function scrollUp () {
    refs.ScrUpButton.addEventListener('click', topFunction)
    window.onscroll = function() {scrollFunction()}
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            refs.ScrUpButton.style.display = "block";
        } else {
            refs.ScrUpButton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }
}
scrollUp ()