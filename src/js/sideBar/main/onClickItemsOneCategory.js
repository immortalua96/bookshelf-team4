import { refs } from '../../refs';
import { renderListCategories } from '../renderListCategories';
import { clearMain } from './clearMain';
import { fetchGategoryBooks } from '../../fetchApi';
import { renderBestBooks } from './renderBestBooks';
import { Report } from 'notiflix/build/notiflix-report-aio';

renderListCategories();
refs.listCategories.addEventListener('click', onClickItemsOneCategory);

export async function onClickItemsOneCategory(ev) {
  const prevActive = document.querySelector('.currentActiveLi');
  ev.target.classList.add('currentActiveLi');
  if (prevActive) {
    prevActive.classList.remove('currentActiveLi');
  }
  try {
    if (
      ev.target.nodeName === 'LI' &&
      ev.target.textContent !== 'All categories'
    ) {
      clearMain();

      const category = ev.target.textContent;
      const data = await fetchGategoryBooks(category);

      const headOneGategory = document.createElement('h2');
      headOneGategory.classList.add('list_name_one_caterory');
      headOneGategory.textContent = category;

      const listOneGategory = document.createElement('ul');
      listOneGategory.classList.add('listOneCategoruBooks');

      refs.mainPage.append(headOneGategory, listOneGategory);

      const markup = data
        .map(
          ({ _id, title, book_image, author }) =>
            `
      <li class="bookItemLI">
        <img src="${book_image}" alt="${title}" class="book_image" data-id=${_id}>
          <h3 class="book_title">${title}</h3>
          <p class="book_author">${author}</p></li>
        <li>
    
      `
        )
        .join('');
      listOneGategory.insertAdjacentHTML('beforeend', markup);
    } else if (ev.target.textContent === 'All categories') {
      ev.target.classList.add('currentActiveLi');

      clearMain();
      renderBestBooks();
    }
  } catch (error) {
    error => {
      Report.failure(
        'Searching Failure',
        'Sorry, there are no books matching the chosen category. Please try again.',
        'Okay'
      );
      console.log(error);
    };
  }
}
