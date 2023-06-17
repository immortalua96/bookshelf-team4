import { refs } from '../refs';
import supportUkraine from '../supportUkraine.json';
function renderListSupportUkraine(data) {

let i = 0;
   const markup = data
  .map(
    ({ title, url, img }) => 
            `<li class="listItemSupport"><p class="counterPoint">${addLeadingZero(i+=1)}</p><a href=${url} target="_blank" rel="noopener noreferrer"><img src="${img}" alt="${title}"></a></li>`
    )
          .join('');
  refs.listSuportUkraine.insertAdjacentHTML('beforeend', markup);
}
renderListSupportUkraine(supportUkraine);

function addLeadingZero(value) {
  return String(value).padStart(2, 0)
}
