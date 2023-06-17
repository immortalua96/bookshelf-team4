import { refs } from '../refs';
import supportUkraine from '../supportUkraine.json';
function renderListSupportUkraine(data) {
  refs.listSuportUkraine.style.listStyle="none"

  refs.listSuportUkraine.style.backgroundColor="#4F2EE8"
  refs.listSuportUkraine.style.color="#FFFFFF"
let i = 0;
   const markup = data
  .map(
    ({ title, url, img }) => 
            `<li><p>${addLeadingZero(i+=1)}</p><a href=${url} target="_blank" rel="noopener noreferrer"><img src="${img}" alt="${title}"></a></li>`
    )
          .join('');
  refs.listSuportUkraine.insertAdjacentHTML('beforeend', markup);
}
renderListSupportUkraine(supportUkraine);

function addLeadingZero(value) {
  return String(value).padStart(2, 0)
}

// const images = JSON.parse(supportUkraine);
// console.log(images);
// console.log(users[1].name); // => Ervin Howell
