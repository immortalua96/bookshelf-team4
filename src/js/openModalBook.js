import { refs } from './refs';
import { fetchBookID } from './fetchApi';
import { reverseOneModalBook } from './sideBar/main/reverseOneModalBook';
import { clearModal } from './clearModal';

function toggleModal() {
  refs.openModalBtn.classList.add("is-hidden");
}
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.mainPage.addEventListener('click', openModalBook);
async function openModalBook(ev) {
  try {
    if (ev.target.nodeName === 'IMG') {
    clearModal()
    const id = ev.target.dataset.id;
    
    const data = await fetchBookID(id)
    const values = Object.values(data)
   
    let url = values[7]
    let author = values[6]
    let title = values[24]
    let description = values[15]
    const markup = reverseOneModalBook(url,author,title,description)
    refs.modal.insertAdjacentHTML('beforeend', markup);
    refs.openModalBtn.classList.remove('is-hidden')
    
   
    ;}}
    

   
    
   catch (error) {
    console.log(error);
  }
  
  
}
