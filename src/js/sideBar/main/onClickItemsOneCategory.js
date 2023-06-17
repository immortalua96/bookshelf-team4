import { refs } from '../../refs';
import { renderListCategories } from '../renderListCategories';
import { clearMain } from './clearMain';
import { fetchGategoryBooks } from '../../fetchApi';
import { renderBestBooks } from './renderBestBooks';

renderListCategories();
refs.listCategories.addEventListener('click', onClickItemsOneCategory);
export async function onClickItemsOneCategory(ev) {
  if (
    ev.target.nodeName === 'LI' &&
    ev.target.textContent !== 'All categories'
  ) {
    clearMain();
    const prevActive = document.querySelector('.currentActiveLi');
    if (prevActive) {
      prevActive.classList.remove('currentActiveLi');
    }
    ev.target.classList.add('currentActiveLi');
    const category = ev.target.textContent;
    const data = await fetchGategoryBooks(category);

    const headOneGategory = document.createElement('h2');
    headOneGategory.textContent = category;

    const listOneGategory = document.createElement('ul');
    listOneGategory.classList.add('listOneCategoruBooks');

    refs.mainPage.append(headOneGategory, listOneGategory);
    console.log(data);

    const markup = data
      .map(
        ({ _id, title, book_image, author }) =>
          `
      <li >
        <img src="${book_image}" alt="${title}" id = "${_id}">
          <h3>${title}</h3>
          <p>${author}</p></li>
        <li>
    
      `
      )
      .join('');
    listOneGategory.insertAdjacentHTML('beforeend', markup);
  } else if (ev.target.textContent === 'All categories') {
    clearMain();
    renderBestBooks();
  }
}
