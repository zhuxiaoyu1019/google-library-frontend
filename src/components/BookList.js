import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useLocation } from "react-router-dom";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import "./style.css";
import Book from "./Book";

export default function BookList({
  savedBookList,
  searchBookList,
  displaySavedBooks,
}) {
  const location = useLocation();
  return (
    <div>
      <Paper square className="paper">
        <Grid container className="head">
          {location.pathname === "/saved" ? (
            <>
              <Grid item>
                <SaveAltIcon />
              </Grid>
              <Grid item className="head-title">
                Saved Book
              </Grid>
            </>
          ) : (
            <Grid item className="head-title">
              Results
            </Grid>
          )}
        </Grid>
        {location.pathname === "/saved"
          ? savedBookList.map((book) => (
              <Book
                key={book._id}
                id={book._id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                displaySavedBooks={displaySavedBooks}
              />
            ))
          : searchBookList.map((book) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.previewLink}
              />
            ))}
      </Paper>
    </div>
  );
}
