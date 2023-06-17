import { refs } from '../../refs';
import { fetchBestBooks } from '../../fetchApi';
export async function renderBestBooks() {
  const data = await fetchBestBooks();
  const markup = data
    .map(
      ({ list_name, books }) => `<ul>
    <li>
    

      <h2 class="categoryTitle">${list_name}</h2>
      <ul class="itemsBooksOfCategory">
        <li>
        <img src="${books[0].book_image}" alt="" class="bookItemImage">
          <h3 class="bookItemTitle">${books[0].title}</h3>
          <p class="bookItemAuthor">${books[0].author}</p></li>
        <li>
        <img src="${books[1].book_image}" alt="" class="bookItemImage">
          <h3 class="bookItemTitle">${books[1].title}</h3>
          <p class="bookItemAuthor">${books[1].author}</p></li>
        <li>
        <img src="${books[2].book_image}" alt="" class="bookItemImage">
          <h3 class="bookItemTitle">${books[2].title}</h3>
          <p class="bookItemAuthor">${books[2].author}</p></li>
        <li>
        <img src="${books[3].book_image}" alt="" class="bookItemImage">
          <h3 class="bookItemTitle">${books[3].title}</h3>
          <p class="bookItemAuthor">${books[3].author}</p></li>
        <li>
        <img src="${books[4].book_image}" alt="" class="bookItemImage">
          <h3 class="bookItemTitle">${books[4].title}</h3>
          <p class="bookItemAuthor">${books[4].author}</p></li>
      </ul>
    <button class="butonSeeMore">see more</button>
    </li>
  </ul>`
    )
    .join('');

  refs.mainPage.insertAdjacentHTML('beforeend', markup);
}
renderBestBooks();
