import { fetchCategories } from '../fetchApi';
import { refs } from '../refs';
import { Report } from 'notiflix/build/notiflix-report-aio';

export async function renderListCategories() {
  try {const data = await fetchCategories();
  const markup = data
    .map(({ list_name }) => ` <li class="itemsCategories">${list_name}</li>`)
    .join('');
  refs.listCategories.insertAdjacentHTML('beforeend', markup);}
  catch (error) {
    Report.failure(
      'Something went wrong',
      'Please, refresh the current page or try again later.',
      'Okay'
    );
    console.log(error);
  }
}
