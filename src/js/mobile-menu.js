(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  
  const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);

  // Close 
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
    
})();

// Burger icon
const openBtn = document.querySelector('.js-open-menu');
const burgerIcon = document.querySelector('.burgerIcon');
const burgerIcon2 = document.querySelector('.burgerIcon2');

openBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  burgerIcon.classList.toggle('hide');
  burgerIcon2.classList.toggle('show');
}