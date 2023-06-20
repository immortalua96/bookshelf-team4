export function reverseOneModalBook(url, author, title, description) {
  return `<div>
  <img class="oneBookImg" 
    src="${url}"
    alt="${title}"
  />

  <h2 class="cardTitle">${title}</h2>
  <p class="cardAuthor">${author}</p>
  <p class="cardDescription">
  ${description}
  </p>

  <button class="addShoppingList">Add to Shopping List</button>
</div>`;
}
