import { refs } from '../../refs';
import { renderListCategories } from '../renderListCategories';
import { clearMain } from './clearMain';
import { fetchGategoryBooks } from '../../fetchApi';
import { renderBestBooks } from './renderBestBooks';
import iconError from '/src/icons/wrong.svg';

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
      headOneGategory.classList.add('list_name_one_category');

      const categoryArray = category.split(" ");
      const titleStyleMarkup = categoryArray
    .map((item, i) => {
      if (i+1 !== categoryArray.length) { return `<span>${item}</span>`}
      return `<span class="title-accent">${item}</span>`
    })
    .join(" ");
    headOneGategory.innerHTML= titleStyleMarkup;

      const listOneGategory = document.createElement('ul');
      listOneGategory.classList.add('itemsBooksOfCategory');

      refs.mainPage.append(headOneGategory, listOneGategory);

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
    } else if (ev.target.textContent === 'All categories') {
      ev.target.classList.add('currentActiveLi');

      clearMain();
      renderBestBooks();
    }
  } catch (error) {
    const errorMsg = `<div class="error_page"><img class="error_icon" src="${iconError}" alt="">
    <p class="error_msg">Sorry, there are no books matching the chosen category.</p></div>`;
    refs.mainPage.insertAdjacentHTML('beforeend', errorMsg);
  }
}
