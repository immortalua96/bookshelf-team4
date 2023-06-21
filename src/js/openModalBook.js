import { refs } from './refs';
import { fetchBookID } from './fetchApi';
import { reverseOneModalBook } from './sideBar/main/reverseOneModalBook';
import { clearModal } from './clearModal';
import { LocalstorageBooks } from './localstorageBooks';
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
      const markup = reverseOneModalBook(url, author, title, description);

      refs.modal.insertAdjacentHTML('beforeend', markup);
      document.body.classList.add('overflow');
      refs.openModalBtn.classList.remove('is-hidden');
      const addBooksLocalstorage = document.querySelector('.addShoppingList');
      local.updateButtonText(id, addBooksLocalstorage);

      addBooksLocalstorage.addEventListener('click', () => {
        if (local.getBooks().indexOf(id) === -1) {
          local.putBooks(id);
          addBooksLocalstorage.textContent = 'Remove from Shopping List';
        } else {
          local.removeBook(id);
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


