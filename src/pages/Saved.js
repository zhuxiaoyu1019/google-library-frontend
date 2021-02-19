import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import Header from "../components/Header";
import API from "../utils/API";

export default function Saved() {
  const [savedBookList, setSavedBookList] = useState([]);
  useEffect(() => {
    displaySavedBooks();
  }, []);

  const displaySavedBooks = () => {
    API.getBooks()
      .then((res) => {
        setSavedBookList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Header />
      <BookList
        savedBookList={savedBookList}
        displaySavedBooks={displaySavedBooks}
      />
    </div>
  );
}
