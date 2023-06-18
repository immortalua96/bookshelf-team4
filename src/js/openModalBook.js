import { refs } from './refs';
import { fetchBookID } from './fetchApi';
refs.mainPage.addEventListener('click', openModalBook);
async function openModalBook(ev) {
  const id = ev.target.dataset.id;
  const data = await fetchBookID(id);
  console.log(data);
}
