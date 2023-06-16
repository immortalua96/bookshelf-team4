import { refs } from '../../refs';
import { fetchBestBooks } from '../../fetchApi';
async function renderBestBooks() {
  const data = await fetchBestBooks();
  console.log(data[0].books);
}

renderBestBooks();
