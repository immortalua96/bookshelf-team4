import { refs } from './refs';
import { fetchBookID } from './fetchApi';
import { reverseOneModalBook } from './sideBar/main/reverseOneModalBook';
import { clearModal } from './clearModal';
import { LocalstorageBooks } from './localstorageBooks';
import { renderMarketPlaceLink } from '/src/js/marketplaceLinks'

import Notiflix from 'notiflix';

import { Report } from 'notiflix/build/notiflix-report-aio';



const local = new LocalstorageBooks();

function toggleModal() {
  refs.openModalBtn.classList.add('is-hidden');
  document.body.classList.remove('overflow')
}
function onCloseModal (event) {
  const modalPage = document.querySelector('.modal-page')
if (event.target.nodeName !== "DIV") {return} 
  toggleModal()}

refs.closeModalBtn.addEventListener('click', toggleModal);
refs.openModalBtn.addEventListener('click', onCloseModal);
document.addEventListener('keydown', toggleModal);

refs.mainPage.addEventListener('click', openModalBook);

async function openModalBook(ev) {
  try {
    if (ev.target.nodeName === 'IMG') {
      clearModal();
      const id = ev.target.dataset.id;

      const data = await fetchBookID(id);
      const values = Object.values(data);

      let url = values[7];
      let author = values[6];
      let title = values[24];
      let description = values[15];
      let links = values[27];
      const markup = reverseOneModalBook(url, author, title, description);
      refs.modal.insertAdjacentHTML('beforeend', markup);

      const marketplaceField = refs.modal.querySelector('.fieldMarketplace');
      const marketplaceMarkup = renderMarketPlaceLink(links);
      marketplaceField.insertAdjacentHTML('beforeend', marketplaceMarkup);

      document.body.classList.add('overflow');
      refs.openModalBtn.classList.remove('is-hidden');
      const addBooksLocalstorage = document.querySelector('.addShoppingList');
      const textModalInІnstructionEl = document.querySelector(
        '.textModalInІnstruction'
      );
      local.updateButtonText(
        id,
        addBooksLocalstorage,
        textModalInІnstructionEl
      );

      addBooksLocalstorage.addEventListener('click', () => {
        if (local.getBooks().indexOf(id) === -1) {
          try {
            local.putBooks(id);
            addBooksLocalstorage.textContent = 'Remove from Shopping List';
            Notiflix.Notify.success(
              `${title} successfully add to the shopping list`
            );
            textModalInІnstructionEl.textContent =
              'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
          } catch (error) {
            Notiflix.Notify.failure(
              `${title} was not successfully added to the shopping list`
            );
          }
        } else {
          local.removeBook(id);
          textModalInІnstructionEl.textContent = '';
          addBooksLocalstorage.textContent = 'Add to Shopping List';
        }
      });
    }
  } catch (error) {
    Report.failure(
      'Something went wrong',
      'This book is not found, refresh the current page or try again later.',
      'Okay'
    );
    console.log(error);
  }
}
