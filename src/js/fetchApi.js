import axios from 'axios';
const CATEGORIES_URL =
  'https://books-backend.p.goit.global/books/category-list ';
const BEST_URL = 'https://books-backend.p.goit.global/books/top-books ';
export async function fetchCategories() {
  try {
    const response = await axios.get(`${CATEGORIES_URL}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function fetchBestBooks() {
  try {
    const response = await axios.get(`${BEST_URL}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
