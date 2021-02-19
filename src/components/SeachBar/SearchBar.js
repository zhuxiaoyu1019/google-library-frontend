import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import "./SearchBar.css";
import "../style.css";

export default function SearchBar({
  formObject,
  setFormObject,
  setSearchBookList,
}) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formObject.search) {
      API.searchBooks(formObject.search)
        .then((res) => setSearchBookList(res.data.items))
        .catch((err) => console.log(err));
    }
    setFormObject({ ...formObject, search: "" });
  };

  return (
    <Paper square className="paper">
      <Grid container className="head">
        <Grid item>
          <LibraryBooksIcon />
        </Grid>
        <Grid item className="head-title">
          Book Search
        </Grid>
      </Grid>
      <form className="form" onSubmit={handleFormSubmit}>
        <InputLabel htmlFor="book-search">Book</InputLabel>
        <Input
          id="book-search"
          name="search"
          onChange={handleInputChange}
          value={formObject.search || ""}
          placeholder="A feast for crows"
        />
        <Button
          className="search-btn"
          onClick={handleFormSubmit}
          variant="contained"
        >
          Search
        </Button>
      </form>
    </Paper>
  );
}
