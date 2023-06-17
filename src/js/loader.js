let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  setTimeout(() => {
    mask.classList.remove('hide');
    setTimeout(() => {
      mask.remove();
    }, 600);
  }, 200);
});