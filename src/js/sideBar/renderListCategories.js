import { fetchCategories } from '../fetchApi';
import { refs } from '../refs';
async function renderListCategories() {
  const data = await fetchCategories();
  const markup = data
    .map(({ list_name }) => ` <li class="itemsCategories">${list_name}</li>`)
    .join('');
  refs.listCategories.insertAdjacentHTML('beforeend', markup);
}
renderListCategories();
