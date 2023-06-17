import axios from 'axios';
const CATEGORIES_URL =
  'https://books-backend.p.goit.global/books/category-list ';
const BEST_URL = 'https://books-backend.p.goit.global/books/top-books ';
const ONE_URL_CATEGORIES =
  'https://books-backend.p.goit.global/books/category?category';
const URL_ID = 'https://books-backend.p.goit.global/books';
export async function fetchCategories() {
  try {
    const response = await axios.get(`${CATEGORIES_URL}`);
    const data = response.data;
    console.log(data);
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
export async function fetchGategoryBooks(category) {
  try {
    const response = await axios.get(`${ONE_URL_CATEGORIES}=${category}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function fetchBookID(id) {
  try {
    const response = await axios.get(`${URL_ID}/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
