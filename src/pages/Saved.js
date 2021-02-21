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
    // setTimeout(function () {
    API.getBooks()
      .then((res) => {
        setSavedBookList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // }, 2000);
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
