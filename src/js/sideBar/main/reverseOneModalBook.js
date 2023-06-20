export function reverseOneModalBook(url, author, title, description) {
  return `<div class="cardBody">
      <div class="cardBodiItem">
        <img class="oneBookImg" src="${url}" alt="${title}" />
        <div class="wrapper">
          <h2 class="cardTitle">${title}</h2>
          <p class="cardAuthor">${author}</p>
          <p class="cardDescription">${description}</p>
          <div>
           ИКОНКИ
          </div>
        </div>
      </div>
      <button class="addShoppingList">Add to Shopping List</button>
    </div>`;
}
