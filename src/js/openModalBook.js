import { refs } from './refs';
import { fetchBookID } from './fetchApi';
refs.mainPage.addEventListener('click', openModalBook);
async function openModalBook(ev) {
  console.log(ev.target);
  const id = ev.target;
  const data = await fetchBookID(id);
}
