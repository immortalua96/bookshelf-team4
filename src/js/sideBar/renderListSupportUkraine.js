import { refs } from '../refs';
import supportUkraine from '../supportUkraine.json';
refs.listSuportUkraine;
function renderListSupportUkraine(data) {
  const markup = data
    .map(
      ({ title, url }) =>
        `<li><a href=${url} target="_blank" rel="noopener noreferrer"><img src="../../images/1.png" alt="${title}"></a></li>`
    )
    .join('');
  refs.listSuportUkraine.insertAdjacentHTML('beforeend', markup);
}
renderListSupportUkraine(supportUkraine);
