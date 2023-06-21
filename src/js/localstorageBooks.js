import { reverseOneModalBook } from './sideBar/main/reverseOneModalBook';

export class LocalstorageBooks {
  constructor() {
    this.keyName = 'books';
  }

  getBooks() {
    const booksLocalstorage = localStorage.getItem(this.keyName);

    if (booksLocalstorage !== null) {
      try {
        return JSON.parse(booksLocalstorage);
      } catch (error) {
        console.log(error);
      }
    }
    return [];
  }

  putBooks(id) {
    const books = this.getBooks();
    const index = books.indexOf(id);
    if (index === -1) {
      books.push(id);
    }
    localStorage.setItem(this.keyName, JSON.stringify(books));
  }

  removeBook(id) {
    const books = this.getBooks();
    const index = books.indexOf(id);
    if (index !== -1) {
      books.splice(index, 1);
      localStorage.setItem(this.keyName, JSON.stringify(books));
    }
  }

  updateButtonText(id, addBooksLocalstorage, textModalLocalstorage) {
    const books = this.getBooks();
    if (books.indexOf(id) === -1) {
      addBooksLocalstorage.textContent = 'Add to Shopping List';
      textModalLocalstorage.textContent = '';
    } else {
      addBooksLocalstorage.textContent = 'Remove from Shopping List';
      textModalLocalstorage.textContent =
        'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
    }
  }
}
