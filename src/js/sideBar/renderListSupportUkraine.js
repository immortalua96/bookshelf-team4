import { refs } from '../refs';
import supportUkraine from '../supportUkraine.json';
refs.listSuportUkraine;
function renderListSupportUkraine(data) {
  const markup = data
    .map(
      ({ title, url, img }) =>
        `<li><a href=${url} target="_blank" rel="noopener noreferrer"><img src="${img}" alt="${title}"></a></li>`
    )
    .join('');
  refs.listSuportUkraine.insertAdjacentHTML('beforeend', markup);
}
renderListSupportUkraine(supportUkraine);
