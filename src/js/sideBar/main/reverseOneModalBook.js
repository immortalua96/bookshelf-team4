export function reverseOneModalBook(url, author, title, description) {
  return `<div class="cardBody">
      <div class="cardBodiItem">
        <img class="oneBookImg" loading="lazy" src="${url}" alt="${title}" />
        <div class="wrapper">
          <button type="button" class="modal-close-btn"  data-modal-close>
          </button>
          <h2 class="cardTitle">${title}</h2>
          <p class="cardAuthor">${author}</p>
          <p class="cardDescription">${description}</p>
          <div class="fieldMarketplace">
          </div>
        </div>
      </div>
      <button class="addShoppingList">Add to Shopping List</button>
      <p class="textModalInІnstruction"></p>
    </div>`;
}
