import iconAmazon from '/src/images/amazon.png';
import iconAppleBooks from '/src/images/applebook.png';
import iconBookShop from '/src/images/bookshop.png';
export function renderMarketPlaceLink(data) {
  return `<ul class="listMarkeplace">
    <li class="itemMaretplace"><a class="linkMarketPlace" href="${data[0].url}" target="_blank" rel="noopener noreferrer">
      <img class="imgMarketPlace" src="${iconAmazon}" alt="${data[0].name}">
    </a></li>
    <li class="itemMaretplace"><a class="linkMarketPlace" href="${data[1].url}" target="_blank" rel="noopener noreferrer">
      <img class="imgMarketPlace" src="${iconAppleBooks}" alt="${data[1].name}">
    </a></li>
    <li class="itemMaretplace"><a class="linkMarketPlace" href="${data[4].url}" target="_blank" rel="noopener noreferrer">
      <img class="imgMarketPlace" src="${iconBookShop}" alt="${data[4].name}">
    </a></li>
  </ul>`;
}
