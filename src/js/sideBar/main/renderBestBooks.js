import { refs } from '../../refs';
import { fetchBestBooks } from '../../fetchApi';
import { Report } from 'notiflix/build/notiflix-report-aio';

export async function renderBestBooks() {
  try{
    const data = await fetchBestBooks();
    const markup = data
    .map(
      ({ list_name, books }) => `<ul>
      <li>
      <h2 class="list_name">${list_name}</h2>
      <ul class="itemsBooksOfCategory">
      <li>
      <img class="book_image" src="${books[0].book_image}" alt="">
      <h3 class="book_title">${books[0].title}</h3>
      <p class="book_author">${books[0].author}</p></li>
      <li>
      <img class="book_image" src="${books[1].book_image}" alt="">
      <h3 class="book_title">${books[1].title}</h3>
      <p class="book_author">${books[1].author}</p></li>
      <li>
      <img class="book_image" src="${books[2].book_image}" alt="">
      <h3 class="book_title">${books[2].title}</h3>
      <p class="book_author">${books[2].author}</p></li>
      <li>
      <img class="book_image" src="${books[3].book_image}" alt="">
      <h3 class="book_title">${books[3].title}</h3>
      <p class="book_author">${books[3].author}</p></li>
      <li>
      <img class="book_image" src="${books[4].book_image}" alt="">
      <h3 class="book_title">${books[4].title}</h3>
      <p class="book_author">${books[4].author}</p></li>
      </ul>
      <button class="see_more">see more</button>
    </li>
  </ul>`
    )
    .join('');

  refs.mainPage.insertAdjacentHTML('beforeend', markup);}
  catch (error) {
    error => {Report.failure("Something went wrong", "Please, reload the current page.", "Okay")
    console.log(error)};
  } 
}
renderBestBooks();
