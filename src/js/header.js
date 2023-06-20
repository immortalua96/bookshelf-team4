import { refs } from './refs';
import Darkmode from 'darkmode-js';

// Инициализация страницы

document.addEventListener('DOMContentLoaded', function () {
  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#', // default: '#fff'
    backgroundColor: '#f3f3f3', // default: '#fff'
    buttonColorDark: '#100f2c', // default: '#100f2c'
    buttonColorLight: '#f6f6f6', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true, // default: true
  };

  const darkmode = new Darkmode(options);

  const lSDarkMode = localStorage.getItem('darkmode');
  const parsedDarkMode = JSON.parse(lSDarkMode);
  if (parsedDarkMode) {
    refs.inputSwitch.checked = true;
    darkmode.toggle();
  }

  const catAllCategFirstChild =
    refs.listCategories.querySelector('li:first-child');
  catAllCategFirstChild.classList.add('currentActiveLi');
});

refs.inputSwitch.addEventListener('click', e => {
  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#', // default: '#fff'
    backgroundColor: '#f3f3f3', // default: '#fff'
    buttonColorDark: '#100f2c', // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true, // default: true
  };

  const darkmode = new Darkmode(options);
  darkmode.toggle();
});
