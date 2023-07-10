import { refs } from '../../refs';
import { renderListCategories } from '../renderListCategories';
import { clearMain } from './clearMain';
import { fetchGategoryBooks } from '../../fetchApi';
import { renderBestBooks } from './renderBestBooks';
import { removeLoader, addLoader } from '/src/js/loaderPage';
import { renderNameOneCategory } from '../../renderNameOneCategory';
import iconError from '/src/icons/symbol-defs.svg';

renderListCategories();

refs.listCategories.addEventListener('click', onClickItemsOneCategory);

export async function onClickItemsOneCategory(ev) {
  
  const prevActive = document.querySelector('.currentActiveLi');
  ev.target.classList.add('currentActiveLi');
  if (prevActive) {
    prevActive.classList.remove('currentActiveLi');
  }
  try {
    addLoader();
    clearMain();
    renderNameOneCategory(ev);
    if (
      ev.target.textContent !== 'All categories'
      ) {
        const listOneGategory = document.createElement('ul');
        listOneGategory.classList.add('itemsBooksOfCategory');
        
        refs.mainPage.append(listOneGategory);

      const data = await fetchGategoryBooks(ev.target.textContent);
      const markup = data
        .map(({ _id, title, book_image, author }) => {
          return `
      <li class="itemOneBook">
        <img src="${book_image}" alt="${title}" class="book_image" loading="lazy" data-id=${_id}>
          <h3 class="book_title">${title}</h3>
          <p class="book_author">${author}</p></li>`;
        })
        .join('');
      listOneGategory.insertAdjacentHTML('beforeend', markup);
    } else {
  renderBestBooks();
    }
   
    removeLoader();
  } catch (error) {
    const errorMsg = `<div class="error_page"><svg class="error_icon" width="300" height="300">
    <use href="${iconError}#icon-error"></use>
  </svg>
    <p class="error_msg">Sorry, there are no books matching the chosen category.</p></div>`;
    refs.mainPage.insertAdjacentHTML('beforeend', errorMsg);
  }
}


