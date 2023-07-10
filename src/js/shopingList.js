import defaultImage from '../images/10.png';
import { fetchBookID } from './fetchApi';
import { renderMarketPlaceLink } from '/src/js/marketplaceLinks';
import someSvg from '../icons/symbol-defs.svg';
import { removeLoader, addLoader } from '/src/js/loaderPage';


const books = [];

export async function getData() {
  addLoader();
  
  const dataString = localStorage.getItem('books');
  const dataParse = JSON.parse(dataString);

  if (!dataParse || !localStorage.getItem('books')) {
    return [];
  }

  for (const id of dataParse) {
    const data = await fetchBookID(id);
    const values = Object.values(data);

    const dataId = values[0];
    const url = values[7];
    const categories = values[1];
    const author = values[6];
    const title = values[24];
    const description = values[15];
    const links = values[27];

    books.push({
      dataId,
      url,
      author,
      title,
      description,
      categories,
      links,
    });
  }

  return books;
}

getData().then(result => {
  if (result.length === 0) {
    renderEmpty();
  } else {
    renderPagination(result);
  }
});
removeLoader();

import '../images/10.png';

const shoppingListContent = document.querySelector('#shoppingListContent');

function renderPaginationMarkkup() {
  const markup = ` <div class="shoppingListBox">
  <h1 class="shoppingTitle">
            Shopping <span class="shoppingTitleSpan">List</span>
          </h1>
  <div class="booksBox">
            <ul class="ShoppingList"></ul>
             <div class="pagination">
            <ul class="paginationList">

            </ul>
          </div>
          </div>
          </div>`;
  shoppingListContent.insertAdjacentHTML('beforeend', markup);
}

renderPaginationMarkkup();

const refs = {
  shoppingList: document.querySelector('.ShoppingList'),
  pagination: document.querySelector('.pagination'),
  paginationList: document.querySelector('.paginationList'),
};

const { shoppingList, pagination, paginationList } = refs;

const booksPerPage = 3;
let currentPage = 1;

function renderPagination(books) {
  const totalPages = Math.ceil(books.length / booksPerPage);
  let paginationMarkup = '';
  let next = `<button class="increase">
      <svg width="13" height="13">
        <use href="${someSvg}#icon-next"></use>
      </svg>
    </button>`;
  let back = `<button class="reduction">
     <svg width="13" height="13">
        <use href="${someSvg}#icon-back"></use>
      </svg>
    </button>`;
  let doubleBack = `<button class="doubleReduction">
      <svg width="13" height="13">
        <use href="${someSvg}#icon-back "></use>
      </svg>
      <svg class="more" width="13" height="13">
        <use href="${someSvg}#icon-back"></use>
      </svg>
    </button>`;
  let doubleNext = `<button class="doubleIncrease">
      <svg width="13" height="13">
        <use href="${someSvg}#icon-next"></use>
      </svg>
      <svg class="less" width="13" height="13">
        <use href="${someSvg}#icon-next "></use>
      </svg>
    </button>`;

  for (let i = 1; i <= totalPages; i += 1) {
    if (i === currentPage) {
      paginationMarkup += `<li class="paginationItem"><button class="paginationButton paginationButtonCurrent">${i}</button></li>`;
    } else {
      paginationMarkup += `<li class="paginationItem"><button class="paginationButton">${i}</button></li>`;
    }
  }

  paginationList.innerHTML = paginationMarkup;

  if (books.length >= 2) {
    pagination.insertAdjacentHTML('beforeend', next);
    pagination.insertAdjacentHTML('afterbegin', back);
    pagination.insertAdjacentHTML('afterbegin', doubleBack);
    pagination.insertAdjacentHTML('beforeend', doubleNext);
  } else {
    renderBooks(books);
    pagination.style.display = 'none';
  }

  const paginationButtons = document.querySelectorAll('.paginationButton');
  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentPage = index + 1;
      const startIndex = (currentPage - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;
      const booksToRender = books.slice(startIndex, endIndex);

      renderBooks(booksToRender);
      selectsActive(button);
    });
  });

  const increaseButton = document.querySelector('.increase');
  const reductionButton = document.querySelector('.reduction');
  const doubleIncreaseButton = document.querySelector('.doubleIncrease');
  const doubleReductionButton = document.querySelector('.doubleReduction');
  increaseButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage += 1;
      const startIndex = (currentPage - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;
      const booksToRender = books.slice(startIndex, endIndex);

      renderBooks(booksToRender);
      selectsActive(paginationButtons[currentPage - 1]);

      reductionButton.disabled = false;
      if (currentPage === totalPages) {
        increaseButton.disabled = true;
      }

      const currentButton = paginationButtons[currentPage - 1];
      const currentButtonRect = currentButton.getBoundingClientRect();
      const paginationRect = paginationList.getBoundingClientRect();
      const currentButtonLeft = currentButtonRect.left - paginationRect.left;
      const currentButtonRight = currentButtonRect.right - paginationRect.left;

      if (currentButtonRight > paginationList.offsetWidth) {
        paginationList.scrollLeft +=
          currentButtonRight - paginationList.offsetWidth;
      } else if (currentButtonLeft < 0) {
        paginationList.scrollLeft += currentButtonLeft;
      }
    }
  });
  reductionButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage -= 1;
      const startIndex = (currentPage - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;
      const booksToRender = books.slice(startIndex, endIndex);

      renderBooks(booksToRender);
      selectsActive(paginationButtons[currentPage - 1]);

      increaseButton.disabled = false;
      if (currentPage === 1) {
        reductionButton.disabled = true;
      }

      const currentButton = paginationButtons[currentPage - 1];
      const currentButtonRect = currentButton.getBoundingClientRect();
      const paginationRect = paginationList.getBoundingClientRect();
      const currentButtonLeft = currentButtonRect.left - paginationRect.left;
      const currentButtonRight = currentButtonRect.right - paginationRect.left;

      if (currentButtonLeft < 0) {
        paginationList.scrollLeft += currentButtonLeft;
      } else if (currentButtonRight > paginationList.offsetWidth) {
        paginationList.scrollLeft +=
          currentButtonRight - paginationList.offsetWidth;
      }
    }
  });
  doubleIncreaseButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage += 2;
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }
      const startIndex = (currentPage - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;
      const booksToRender = books.slice(startIndex, endIndex);

      renderBooks(booksToRender);
      selectsActive(paginationButtons[currentPage - 1]);

      reductionButton.disabled = false;
      if (currentPage === totalPages) {
        increaseButton.disabled = true;
      }

      const currentButton = paginationButtons[currentPage - 1];
      const currentButtonRect = currentButton.getBoundingClientRect();
      const paginationRect = paginationList.getBoundingClientRect();
      const currentButtonLeft = currentButtonRect.left - paginationRect.left;
      const currentButtonRight = currentButtonRect.right - paginationRect.left;

      if (currentButtonRight > paginationList.offsetWidth) {
        paginationList.scrollLeft +=
          currentButtonRight - paginationList.offsetWidth;
      } else if (currentButtonLeft < 0) {
        paginationList.scrollLeft += currentButtonLeft;
      }
    }
  });
  doubleReductionButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage -= 2;
      if (currentPage < 1) {
        currentPage = 1;
      }
      const startIndex = (currentPage - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;
      const booksToRender = books.slice(startIndex, endIndex);

      renderBooks(booksToRender);
      selectsActive(paginationButtons[currentPage - 1]);

      increaseButton.disabled = false;
      if (currentPage === 1) {
        reductionButton.disabled = true;
      }

      const currentButton = paginationButtons[currentPage - 1];
      const currentButtonRect = currentButton.getBoundingClientRect();
      const paginationRect = paginationList.getBoundingClientRect();
      const currentButtonLeft = currentButtonRect.left - paginationRect.left;
      const currentButtonRight = currentButtonRect.right - paginationRect.left;

      if (currentButtonLeft < 0) {
        paginationList.scrollLeft += currentButtonLeft;
      } else if (currentButtonRight > paginationList.offsetWidth) {
        paginationList.scrollLeft +=
          currentButtonRight - paginationList.offsetWidth;
      }
    }
  });

  renderBooks(books.slice(0, booksPerPage));
}

function selectsActive(activeButton) {
  const paginationButtons = document.querySelectorAll('.paginationButton');

  paginationButtons.forEach(button => {
    button.classList.remove('paginationButtonCurrent');
  });
  activeButton.classList.add('paginationButtonCurrent');
}
function renderBooks(books) {
  shoppingList.innerHTML = '';
  books.forEach(
    ({ dataId, url, author, title, description, categories, links }) => {
      const markup = `
      <li class="shoppingItem" id="${dataId}">
        <img class="bookImg" src="${url}" alt="" loading="lazy" />
        <div class="bookInformationBox">
          <div class="scroll titleBookdiv">
            <h2 class="bookName">${title}</h2>
          </div>
          <button class="dump">
            <svg width="16" height="16">
              <use href="${someSvg}#icon-dump"></use>
            </svg>
          </button>
          <div class="scroll">
            <p class="artisticDirectionBook">${categories}</p>
          </div>
          <div class="artisticDirectionBookScroll">
            <p class="descriptionBook">${description}</p>
          </div> 
          <div class="authorBookScroll">
            <p class="authorBook">${author}</p>
          </div>
          <div class="fieldMarketplace-${dataId}"></div>
        </div>
      </li>
    `;

      shoppingList.insertAdjacentHTML('beforeend', markup);
      const marketplaceField = document.querySelector(
        `.fieldMarketplace-${dataId}`
      );
      const marketplaceMarkup = renderMarketPlaceLink(links);
      marketplaceField.insertAdjacentHTML('beforeend', marketplaceMarkup);
    }
  );

  const dumpButtons = document.querySelectorAll('.dump');

  dumpButtons.forEach(button => {
    button.addEventListener('click', async event => {
      const liElement = event.target.closest('li');
      const localID = liElement.id;

      if (liElement) {
        liElement.remove();

        const storedIds = JSON.parse(localStorage.getItem('books'));
        const index = storedIds.indexOf(localID);
        if (index !== -1) {
          storedIds.splice(index, 1);
          localStorage.setItem('books', JSON.stringify(storedIds));
        }
        if (storedIds.length === 0) {
          renderEmpty();
          pagination.style.display = 'none';
        }

        location.reload();
      }
    });
  });
}

function renderEmpty() {
  const markup = `<div class="emptyPaga">
      <p class="emptyText">
        This page is empty, add some books and proceed to order.
      </p>

      <img class="emptyImg" src="${defaultImage}" alt="" />

    </div>`;
  shoppingList.innerHTML = markup;
}
