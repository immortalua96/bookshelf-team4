import { refs } from "./refs";
export function renderNameOneCategory(ev) {
    const headOneGategory = document.createElement('h2');
    headOneGategory.classList.add('list_name_one_category');
    const category = ev.target.textContent;
        
        const categoryArray = category.split(' ');
        const titleStyleMarkup = categoryArray
        .map((item, i) => {
          if (i + 1 !== categoryArray.length) {
            return `<span>${item}</span>`;
          }
          return `<span class="title-accent">${item}</span>`;
        })
        .join(' ');
        headOneGategory.innerHTML = titleStyleMarkup;
        refs.mainPage.append(headOneGategory);
        console.log(headOneGategory);
  }