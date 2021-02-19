import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SeachBar/SearchBar";
import BookList from "../components/BookList";

export default function Search() {
  const [formObject, setFormObject] = useState({});
  const [searchBookList, setSearchBookList] = useState([]);

  return (
    <div>
      <Header />
      <SearchBar
        formObject={formObject}
        setFormObject={setFormObject}
        setSearchBookList={setSearchBookList}
      />
      <BookList searchBookList={searchBookList} />
    </div>
  );
}
