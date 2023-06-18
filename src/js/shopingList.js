import defaultImage from '../images/10.png';

const books = [
  //   {
  //     img: '',
  //     name: 'WONDER',
  //     artisticDirection: 'Hardcover fiction',
  //     description:
  //       'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
  //     author: 'R.J. Palacio',
  //   },
  //   {
  //     img: '',
  //     name: 'DAISY JONES & THE SIX',
  //     artisticDirection: 'Combined  Print and E-Book Fiction',
  //     description:
  //       'For a while, Daisy Jones & The Six were everywhere. Their albums were on every turntable, they sold out arenas from coast to coast, their sound defined an era. And then, on 12 July 1979, they split. Nobody ever knew why. Until now. They were lovers and friends and brothers and rivals.',
  //     author: 'Taylor Jenkins Reid',
  //   },
  //   {
  //     img: '',
  //     name: 'I will find you',
  //     artisticDirection: 'Hardcover fiction',
  //     description:
  //       'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
  //     author: 'Harlan Coben',
  //   },
  //   {
  //     img: '',
  //     name: 'Hardcover fiction',
  //     artisticDirection: 'Combined Print and E-Book Fiction',
  //     description:
  //       'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to the know the family of his college sweetheart.',
  //     author: 'Ann Napolitano',
  //   },
];

const refs = {
  shoppingList: document.querySelector('.ShoppingList'),
  pagination: document.querySelector('.pagination'),
};

const { shoppingList, pagination } = refs;

const booksPerPage = 3;
let currentPage = 1;

function renderPagination(books) {
  const totalPages = Math.ceil(books.length / booksPerPage);
  let paginationMarkup = '';
  let next = `<button class="increase">
      <svg width="13" height="13">
        <use href="/symbol-defs.505e88bc.svg#icon-next"></use>
      </svg>
    </button>`;
  let back = `<button class="reduction">
     <svg width="13" height="13">
        <use href="/symbol-defs.505e88bc.svg#icon-back"></use>
      </svg>
    </button>`;
  let doubleBack = `<button class="doubleReduction">
      <svg width="13" height="13">
        <use href="/symbol-defs.505e88bc.svg#icon-back "></use>
      </svg>
      <svg class="more" width="13" height="13">
        <use href="/symbol-defs.505e88bc.svg#icon-back"></use>
      </svg>
    </button>`;
  let doubleNext = `<button class="doubleIncrease">
      <svg width="13" height="13">
        <use href="/symbol-defs.505e88bc.svg#icon-next"></use>
      </svg>
      <svg class="less" width="13" height="13">
        <use href="/symbol-defs.505e88bc.svg#icon-next "></use>
      </svg>
    </button>`;

  for (let i = 1; i <= totalPages; i += 1) {
    if (i === currentPage) {
      paginationMarkup += `<button class="paginationButton paginationButtonCurrent">${i}</button>`;
    } else {
      paginationMarkup += `<button class="paginationButton">${i}</button>`;
    }
  }

  pagination.innerHTML = paginationMarkup;

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
    }
  });

  doubleIncreaseButton.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage += 2;
      const startIndex = (currentPage - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;
      const booksToRender = books.slice(startIndex, endIndex);

      renderBooks(booksToRender);
      selectsActive(paginationButtons[currentPage - 1]);
    }
  });

  doubleReductionButton.addEventListener('click', () => {
    if (currentPage > 2) {
      currentPage -= 2;
      const startIndex = (currentPage - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;
      const booksToRender = books.slice(startIndex, endIndex);

      renderBooks(booksToRender);
      selectsActive(paginationButtons[currentPage - 1]);
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

function renderBooks(book) {
  shoppingList.innerHTML = '';
  book.map(({ img, name, artisticDirection, description, author }) => {
    const markup = `
      <li class="shoppingItem">
        <img class="bookImg" src="${img}" alt="" />
        <div class="bookInformationBox">
          <div class="scroll">
            <h2 class="bookName">${name}</h2>
          </div>
          <button class="dump">
            <svg width="16" height="16">
              <use href="/symbol-defs.505e88bc.svg#icon-dump"></use>
            </svg>
          </button>
          <div class="scroll">
            <p class="artisticDirectionBook">${artisticDirection}</p>
          </div>
          <div class="artisticDirectionBookScroll">
            <p class="descriptionBook">${description}</p>
          </div>
          <div class="authorBookScroll">
            <p class="authorBook">${author}</p>
          </div>
        </div>
        <div class="imgLink">
          <a href=""> 
          <svg width="16" height="16">
              <use href="/amazon_- logo-1000x302.svg#Page-1"></use>
            </svg>
          </a>
          <a href=""> 
          <svg width="16" height="16">
              <use href="/Users/maksim/Desktop/безіменна папка/book-square-svgrepo-com.svg"></use>
            </svg>
          </a>
        </div>
      </li>
    `;

    shoppingList.insertAdjacentHTML('beforeend', markup);
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

if (books.length === 0) {
  renderEmpty();
} else {
  renderPagination(books);
}
