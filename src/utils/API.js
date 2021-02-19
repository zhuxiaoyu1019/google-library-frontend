import axios from "axios";
// const URL_PREFIX = "http://localhost:8080";
const URL_PREFIX = "https://google-library-backend.herokuapp.com";

const API = {
  searchBooks: (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+intitle"
    `);
  },
  getBooks: () => {
    return axios.get(`${URL_PREFIX}/api/books`);
  },
  saveBook: (bookInfo) => {
    return axios.post(`${URL_PREFIX}/api/books`, bookInfo);
  },
  deleteBook: (id) => {
    return axios.delete(`${URL_PREFIX}/api/books/${id}`);
  },
};

export default API;
