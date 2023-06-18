import { refs } from './refs';
import { fetchBookID } from './fetchApi';
refs.mainPage.addEventListener('click', openModalBook);
async function openModalBook(ev) {
  const id = ev.target.dataset.id;
  const data = await fetchBookID(id);
  const values = Object.values(data);
  const array = [values];
  const marcup = array
    .map(() => {
      return `<div class="popup_body">
          <button
            type="button"
            class="popup-close_button"
            data-popup-close
            aria-label="Close"
            ><svg class="modal-close-btn-icon" width="24" height="24">
            <use href="./src/icons/symbol-defs.svg#icon-popap-close"></use>
          </svg>
          ></button>
           <div class="popup_wrapper">
          <img class="popup-book_image" src="${values[7]}" alt="${values[24]}" loading="lazy" width="180" height="auto">
         <div class="popup-book_inf">
          <p class="popup-book_title">${values[24]}</p>
          <p class="popup-book_author">${values[6]}</p>
          <p class="popup-book_description">${values[15]}</p>
          <div>Иконки</div>
          </div>
          
          </div>
          <button type="button" class="popup-add_btn button">
            Add to shopping list
          </button>
        </div>`;
    })
    .join('');
  refs.popup.insertAdjacentHTML('beforeend', marcup);
}
