import axios from 'axios';
const CATEGORIES_URL =
  'https://books-backend.p.goit.global/books/category-list ';
export async function fetchImages(value, pageNr) {
  try {
    const response = await axios.get(`${CATEGORIES_URL}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
