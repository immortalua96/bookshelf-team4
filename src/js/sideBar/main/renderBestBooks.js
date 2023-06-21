import { refs } from '../../refs';
import { fetchBestBooks, fetchGategoryBooks } from '../../fetchApi';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { removeLoader, addLoader } from '/src/js/loader';

export async function renderBestBooks() {
  try {
    const data = await fetchBestBooks();
    data.forEach(item => {
      if (item.books.length === 0) {
        const errorMsg = `<h2 class="list_name">${item.list_name}</h2><div class="error_page"><p class="error_msg">Sorry, there are no books matching the chosen category.</p></div>`;
        refs.mainPage.insertAdjacentHTML('beforeend', errorMsg);
      }
      const markup = data
        .map(({ list_name, books }) => {
          console.log(books);
          return `<div class="containerForCategory">
     
        <h2 class="list_name">${list_name}</h2>
        <ul class="itemsBooksOfCategory">
          <li class="itemOneBook">
          <img loading="lazy" class="book_image" src="${books[0].book_image}" alt="">
            <h3 class="book_title">${books[0].title}</h3>
            <p class="book_author">${books[0].author}</p></li>
          <li class="itemOneBook">
          <img loading="lazy" class="book_image" src="${books[1].book_image}" alt="">
            <h3 class="book_title">${books[1].title}</h3>
            <p class="book_author">${books[1].author}</p></li>
          <li class="itemOneBook">
          <img loading="lazy" class="book_image" src="${books[2].book_image}" alt="">
            <h3 class="book_title">${books[1].title}</h3>
            <p class="book_author">${books[2].author}</p></li>
          <li class="itemOneBook">
          <img loading="lazy" class="book_image" src="${books[3].book_image}" alt="">
            <h3 class="book_title">${books[1].title}</h3>
            <p class="book_author">${books[3].author}</p></li>
          <li class="itemOneBook">
          <img loading="lazy" class="book_image" src="${books[4].book_image}" alt="">
            <h3 class="book_title">${books[1].title}</h3>
            <p class="book_author">${books[4].author}</p></li>
        </ul>
        <button class="see_more">see more</button>

    </div>`;
        })
        .join('');

      refs.mainPage.insertAdjacentHTML('beforeend', markup);

      const btnsSeeMore = document.querySelectorAll('.see_more');

      btnsSeeMore.forEach(btnItem => {
        btnItem.addEventListener('click', onBtnSeeMoreClick);
        removeLoader();
      });
    });
  } catch (error) {
    Report.failure(
      'Something went wrong',
      'Please, refresh the current page or try again later.',
      'Okay'
    );
    console.log(error);
  }
}

async function onBtnSeeMoreClick(event) {
  addLoader();
  const categoryName = event.target.parentNode.children[0].textContent;
  const ulRef = event.target.parentNode.children[1];

  const books = await fetchGategoryBooks(categoryName);

  const markup = books
    .map(({ book_image, title, author }) => {
      let truncatedTitle = truncateByWords(title, 3);
      return `<li class="itemOneBook">
      <img class="book_image" src="${book_image}" alt="">
      <h3 class="book_title">${title}</h3>
      <p class="book_author">${author}</p></li>`;
    })
    .join('');
  ulRef.innerHTML = '';
  ulRef.innerHTML = markup;
  event.target.style.display = 'none';
  const errorMsg = `<p class="error_msg_list_render">...There are no books matching the chosen category...</p>`;
  ulRef.insertAdjacentHTML('afterend', errorMsg);
  removeLoader();
}

renderBestBooks();
