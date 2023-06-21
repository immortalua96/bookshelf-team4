import { refs } from '../../refs';
import { fetchBestBooks, fetchGategoryBooks } from '../../fetchApi';
import { Report } from 'notiflix/build/notiflix-report-aio';

export async function renderBestBooks() {
  try {
    const data = await fetchBestBooks();

    const markup = data
      .map(({ list_name, books }) => {
        let truncatedTitle0 = truncateByWords(books[0].title, 3);
        let truncatedTitle1 = truncateByWords(books[1].title, 3);
        let truncatedTitle2 = truncateByWords(books[2].title, 3);

        let truncatedTitle3 = truncateByWords(books[3].title, 3);
        let truncatedTitle4 = truncateByWords(books[4].title, 3);

        return `<div class="containerForCategory">
     
        <h2 class="list_name">${list_name}</h2>
        <ul class="itemsBooksOfCategory">
          <li class="itemOneBook">
          <img loading="lazy" class="book_image" src="${books[0].book_image}" alt="">
            <h3 class="book_title">${truncatedTitle0}</h3>
            <p class="book_author">${books[0].author}</p></li>
          <li class="itemOneBook">
          <img loading="lazy" class="book_image" src="${books[1].book_image}" alt="">
            <h3 class="book_title">${truncatedTitle1}</h3>
            <p class="book_author">${books[1].author}</p></li>
          <li class="itemOneBook">
          <img loading="lazy" class="book_image" src="${books[2].book_image}" alt="">
            <h3 class="book_title">${truncatedTitle2}</h3>
            <p class="book_author">${books[2].author}</p></li>
          <li class="itemOneBook">
          <img loading="lazy" class="book_image" src="${books[3].book_image}" alt="">
            <h3 class="book_title">${truncatedTitle3}</h3>
            <p class="book_author">${books[3].author}</p></li>
          <li class="itemOneBook">
          <img loading="lazy" class="book_image" src="${books[4].book_image}" alt="">
            <h3 class="book_title">${truncatedTitle4}</h3>
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
    });
  } catch (error) {
    Report.failure(
      'Something went wrong',
      'Please, reload the current page.',
      'Okay'
    );
    console.log(error);
  }
}
export function truncateByWords(str, maxWords) {
  let words = str.trim().split(' ');
  console.log(words);
  let truncatedWords = words.slice(0, maxWords);
  let truncatedStr = truncatedWords.join(' ');
  if (words.length > maxWords) {
    truncatedStr += '...';
  }
  return truncatedStr;
}

async function onBtnSeeMoreClick(event) {
  const categoryName = event.target.parentNode.children[0].textContent;
  const ulRef = event.target.parentNode.children[1];

  const books = await fetchGategoryBooks(categoryName);

  const markup = books
    .map(({ book_image, title, author }) => {
      let truncatedTitle = truncateByWords(title, 3);
      return `<li class="itemOneBook">
        <img class="book_image" src="${book_image}" alt="">
          <h3 class="book_title">${truncatedTitle}</h3>
          <p class="book_author">${author}</p></li>`;
    })
    .join('');
  ulRef.innerHTML = '';
  ulRef.innerHTML = markup;
  event.target.style.display = 'none';
}
renderBestBooks();
//  Это писали мы
// const markup = data.map(({ list_name }) => {
//   return `<div class="containerForCategory">
//     <h2 class="list_name">${list_name}</h2>
//     <ul class="itemsBooksOfCategory"> </ul>
//     <button class="see_more">see more</button>
//     </div>`;
// });
// console.log(markup);
// const listBook = data
//   .map(({ books }, i) => {
//     console.log(data);
//     console.log(books[i].title);
//     let truncatedTitle = truncateByWords(books[i].title, 3);
//     console.log(truncatedTitle);
//     return `<li class="itemOneBook">
//         <img loading="lazy" class="book_image" src="${books[i].book_image}" alt="">
//           <h3 class="book_title">${truncatedTitle}</h3>
//           <p class="book_author">${books[i].author}</p></li>`;
//   })
//   .join('');

// markup
//   .querySelector('.containerForCategory')
//   .insertAdjacentHTML('beforeend', listBook);
// // });

// refs.mainPage.insertAdjacentHTML('beforeend', markup);

// до сюда
