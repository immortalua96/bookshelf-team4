import { refs } from '../refs';
import imgSupUkr1 from '/src/images/supportUkr/1.png';
import imgSupUkr2 from '/src/images/supportUkr/2.png';
import imgSupUkr3 from '/src/images/supportUkr/3.png';
import imgSupUkr4 from '/src/images/supportUkr/4.png';
import imgSupUkr5 from '/src/images/supportUkr/5.png';
import imgSupUkr6 from '/src/images/supportUkr/6.png';
import imgSupUkr7 from '/src/images/supportUkr/7.png';
import imgSupUkr8 from '/src/images/supportUkr/8.png';
import imgSupUkr9 from '/src/images/supportUkr/9.png';


import supportUkraine from '../supportUkraine'

function renderListSupportUkraine(data) {
let imgArray = [imgSupUkr1, imgSupUkr2, imgSupUkr3, imgSupUkr4, imgSupUkr5, imgSupUkr6, imgSupUkr7, imgSupUkr8, imgSupUkr9];
let markup = "";
for(let i = 0; i <= imgArray.length; i+=1) {
  console.log(imgArray.length);
  markup = data
      .map(
        ({ title, url }) =>
          `<li class="listItemSupport"><p class="counterPoint">${addLeadingZero(i+=1)}</p><a href=${url} target="_blank" rel="noopener noreferrer"><img class="img-foundation" src="${imgArray[i]}" alt="${title} "></a></li>`
      )
      .join('');
}
refs.listSuportUkraine.insertAdjacentHTML('beforeend', markup); 
      }

renderListSupportUkraine(supportUkraine);

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
